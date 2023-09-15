/*  Library Management  */

'use strict';

// Class-Based Design in declare in constructor
class Book {
    constructor (title, author, isbn) {
        this.title = title;
        
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
        this.checkeoutCount = 0;
        this.dueDate = null;
        this.ratings = [];
        this.reviews = [];
        this.transactions = [];
  }


  //  function to Checkout a book
        checkoutBook() {
            if (!this.isCheckedOut) {
                if (this.checkoutCount < Library.MAX_CHECKOUTS) {
                    this.isCheckedOut = true;
                    this.checkoutCount++;

                    const dueDate = new Date();
                    dueDate.setDate(dueDate.getDate() + 14);      // set due date to 14 days from today
                    this.dueDate = dueDate;                         // set the duedate property
                    return `Checked out '${this.title}' by ${this.author} (ISBN: ${this.isbn})`;
                } else {
                    return `'${this.title}' has already been checked out ${Library.MAX_CHECKOUTS} times.`;
                }
            } else {
                return `'${this.title}' is already checked out.`;
            }
        }

    // return
        returnBook() {
            if (this.isCheckedOut) {
                this.isCheckedOut = false;
                return `'${this.title}' has been returned.`;
            } else {
                return `'${this.title}' is not checked out.`;
            }
        }

  // Overdue Books

  isOverdue () {
    if (this.dueDate) {
      return new Date () > new Date (this.dueDate);
    }
    return false;
  }

  // Book rating system

  rateBook (rating, content = '') {
    if (rating >= 1 && rating <= 5) {
      this.reviews.push ({ rating, content });
      console.log ( `Rated '${this.title}' by ${this.author} (ISBN: ${this.isbn}) with ${rating} stars.` );
    } else {
      console.log (`Invalid rating. Ratings must be between 1 and 5.`);
    }
  }

      // function Average raating of the book
        getAverageRating () {
            // if (this.ratings.length === 0) {
            // return 0;
            // }
            // const sum = this.ratings.reduce ((acc, curr) => acc + curr, 0);
            // return sum / this.ratings.length; // Calculate the average rating


            if (this.reviews.length === 0) {
                return 0;
            }
            const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return sum / this.reviews.length;
        }

 // Function to get the total number of reviews
           getTotalReviews() {
             return this.reviews.length;
         }


     // Function to get the total number of reviews
            getTotalReviews() {
                return this.reviews.length;
            }

    // Function to filter reviews based on minimum rating and optional content
            filterReviews(minRating = 1, searchText = '') {
                return this.reviews.filter(
                    (review) =>
                        review.rating >= minRating &&
                        (searchText === '' || review.content.includes(searchText))
                );
            }


  // Seaarch Functionality

  searchBooks(query) {
    query = query.toLowerCase ();
    const matchingBooks = [];

    for (const isbn in this.books) {
      const book = this.books[isbn];
      if (book.matchesQuery (query)) {
        matchingBooks.push (book);
      }
    }
    return matchingBooks;
  }

  // Sortlibrary for Books:
  sortLibrary (criteria) {
    const sortedBooks = Object.values (this.books).sort ((a, b) => {
      if (criteria === 'title') {
        return a.title.localeCompare (b.title);
      } else if (criteria === 'author') {
        return a.author.localeCompare (b.author);
      } else if (criteria === 'averageRating') {
        return b.getAverageRating () - a.getAverageRating ();
      }
    });
    return sortedBooks;
  }


  matchesQuery (query) {
    const lowercaseQuery = querystr.toLowerCase ();
    return (
      this.title.toLowerCase ().includes (lowercaseQuery) ||
      this.author.toLowerCase ().includes (lowercaseQuery) ||
      this.isbn.toLowerCase ().includes (lowercaseQuery)
    );
  }


  // Define custom error classes
// class BookNotFoundError extends Error {
//     constructor(isbn) {
//         super(`Book with ISBN ${isbn} not found in the library.`);
//         this.name = 'BookNotFoundError';
//     }
// }

// class InvalidOperationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'InvalidOperationError';
//     }
// }




  // checkout user
  checkout (user) {
    if (!this.isCheckedOut) {

      throw new Error ('InvalidOperationError: Book is alreadyy checked out.');
    }
    this.isCheckedOut = true;
    this.transactions.push ({
      date: new Date (),
      type: 'checkeout',
      user: user,
    });
  }

  // Book is not checked out
  return (user) {
    if (!this.isCheckedOut) {
      throw new Error ('InvalidOperationError: Book is not checked out.');
    }
    this.isCheckedOut = false;
    this.transactions.push ({
      date: new Date (),
      type: 'return',
      user: user,
    });
  }


  // Advanced Rating System

  rate (user, rating, content = '') {
    if (rating < 1 || rating > 5) {
      throw new Error (
        'InvalidOperationError: Rating must be between 1 and 5.'
      );
    }
    this.reviews.push ({
      user: user,
      rating: rating,
      content: content,
    });
  }

  getAverageRating () {
    if (this.reviews.length === 0) return 0;
    const totalRating = this.reviews.reduce (
      (sum, review) => sum + review.rating,
      0
    );
    return totalRating / this.reviews.length;
  }

  getTotalReviews () {
    return this.reviews.length;
  }

  filterReviews (minRating = 1, searchText = '') {
    return this.reviews.filter (
      review =>
        review.rating >= minRating &&
        (searchText === '' || review.content.includes (searchText))
    );
  }
}

class Library {
  static MAX_CHECKOUTS = 3;

  constructor () {
    this.books = [];
    this.users = [];
  }

  addBook (book) {
    this.books.push (book);
  }

  addUser (user) {
    this.users.push (user);
  }

  findBook (title) {
    const book = this.books.find (book => book.title === title);
    if (!book) {
      throw new Error ('BookNotFoundError: Book not found in the library.');
    }
    return book;
  }
}

class User {
  constructor (name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowedBook (book) {
    book.checkout (this);
    this.borrowedBooks.push (book);
  }

  returnBook (book) {
    book.return (this);
    this.borrowedBooks = this.borrowedBooks.filter (b => b !== book);
  }
}







const library = new Library ();

const book1 = new Book ('Bhagavat Gita', 'Ved Vyas', 100000000001);
// const book2 = new Book ('the Ocean tour', 'Rajeshbhai', 9874567891011);
// const book3 = new Book ('the Great', 'Munnabhai', 6844567891011);
// const book4 = new Book ('Mahabharat', 'Ved Vyas', 445675491011);

library.addBook (book1);
// library.addBook (book2);
// library.addBook (book3);
// library.addBook (book4);


 console.log(library);

console.log();
book1.rateBook(4, 'Great book');
book1.rateBook(5, 'Amazing read book');
book1.rateBook(3)


console.log();
console.log(`Average Rating: ${book1.getAverageRating()}`);

console.log();
console.log(`Total Reviews:  ${book1.getTotalReviews()}`);
console.log(`Filtered Reviews:`, book1.filterReviews(4, 'Great'));