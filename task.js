/*  Library Management  */

'use strict';

// function new Book (title, author, isbn) {
//   return {
//     title,
//     author,
//     isbn,
//     checkedOut: false,
//     checkoutCount: 0,
//     dueDate: null,
//     ratings: [],
//     checkoutBook() {
//         if (this.checkoutCount < Library.MAX_CHECKOUTS) {
//             this.checkoutCount++;
//             const dueDate = new Date();
//             dueDate.setDate(dueDate.getDate() + 14);
//             this.dueDate = dueDate;
//             console.log(`Checked out '${this.title}' by ${this.author} (ISBN: ${this.isbn})`);
//             } else {
//                 console.log (`Sorry, '${this.title}' has already been checked out ${Library.MAX_CHECKOUTS} times.`);
//             }
//         },

//         isOverdue() {
//             if (this.dueDate) {
//                 return new Date() > new Date(this.dueDate);
//             }
//             return false;
//         },

//         rateBook(rating) {
//             if (rating >= 1 && rating <= 5) {
//                 this.ratings.push(rating);
//                 console.log(`Rated '${this.title}' by ${this.author} (ISBN: ${this.isbn}) with ${rating} stars.`);
//             } else {
//                 console.log(`Invalid rating. Ratings must be between 1 and 5.`);
//             }
//         },

//         getAverageRating() {
//             if (this.ratings.length === 0) {
//                 return 0;
//             }
//             const sum = this.ratings.reduce((acc, curr) => acc + curr, 0);
//             return sum / this.ratings.length;
//         },

//         // matchesQuery(query) {
//         //     const lowercaseQuery = query.toLowerCase();
//         //     return {
//         //         this.title.toLowerCase().includes(lowercaseQuery) ||
//         //         this.author.toLowerCase().includes(lowercaseQuery)
//         //     };
//         // },
//   };

// }

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isCheckedOut = false;
        this.reviews = [];
        this.transactions = [];
    }

    checkout(user) {
        if (this.isCheckedOut) {
            throw new Error('InvalidOperationError: Book is alreadyy checked out.');
        }
        this.isCheckedOut = true;
        this.transactions.push({
            date: new Date(),
            type: 'checkeout',
            user: user,
        });
    }

    return(user) {
        if (!this.isCheckedOut) {
            throw new Error('InvalidOperationError: Book is not checked out.');
        }
        this.isCheckedOut = false;
        this.transactions.push({
            date: new Date(),
            type: 'return',
            user: user,
        });
    }

    rate(user, rating, content = '') {
        if (rating < 1 || rating > 5) {
            throw new Error('InvalidOperationError: Rating must be between 1 and 5.');
        }
        this.reviews.push({
            user: user,
            rating: rating,
            content: content, 
        });
    }

    getAverageRating() {
        if (this.reviews.length === 0) return 0;
        const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / this.reviews.length;
    }

    getTotalReviews() {
        return this.reviews.length;
    }

    filterReviews(minRating = 1, searchText = '') {
        return this.reviews.filter(
            (review) => 
            review.rating >= minRating &&
            (searchText === '' || review.content.includes(searchText))
        );
    }
}


class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addUser(user) {
        this.users.push(user);
    }

    findBook(title) {
        const book = this.books.find((book) => book.title === title);
        if (!book) {
            throw new Error('BookNotFoundError: Book not found in the library.');
        }
        return book;
    }
}


class User {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    borrowedBook(book) {
        book.checkout(this);
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        book.return(this);
        this.borrowedBooks = this.borrowedBooks.filter((b) => b !== book);
    }
}


const library = new Library();


const book1 = new Book ('Bhagavad Gita', 'Ved Vyas', 100000000001);
const book2 = new Book ('the Ocean tour', 'Rajeshbhai', 9874567891011);
const book3 = new Book ('the Great', 'Munnabhai', 6844567891011);
const book4 = new Book ('Mahabharat', 'Ved Vyas', 445675491011);


library.addBook(book1);
library.addBook(book2);



/* library array */

// const MAX_CHECKOUTS = 3;


// function createLibrary() {
//     return {
//         books: {},

//         addBook(book) {
//             if (this.books[book.isbn]) {
//                 console.log(`A book with ISBN ${book.isbn} already exists.`);
//             } else {
//                 this.books[book.isbn] = book;
//                 console.log(`Added '${book.title}' by ${book.author} (ISBN: ${book.isbn}) to the library.`);
//             }
//         },

//         checkoutBook(isbn) {
//             if(isbn in this.books) {
//                 const book = this.books[isbn];
//                 if (book.checkoutCount < MAX_CHECKOUTS) {
//                     book.checkoutCount++;

//                     const dueDate = new Date();
//                     dueDate.setDate(dueDate.getDate() + 14);
//                     book.dueDate = dueDate;

//                     console.log(`Checked out '${book.title}' by ${book.author} (ISBN: ${book.isbn})`);
//                 } else {
//                     console.log(`Sorry, '${book.title}' has already been checked out ${MAX_CHECKOUTS} times.`);
//                 }
//             } else {
//                 console.log(`Book with ISBN ${isbn} not found in the library.`);
//             }
//         },

//         listOverdueBooks() {
//            const overdueBooks = [];
//            for (const isbn in this.books) {
//             const book = this.books[isbn];
//             if (book.dueDate && new Date() > new Date(book.dueDate)) {
//                 overdueBooks.push(book);
//             }
//            } 
//            return overdueBooks;
//         },

//         rateBook(isbn, rating) {
//             if (isbn in this.books) {
//                 const book = this.books[isbn];
//                 if (rating >= 1 && rating <= 5) {
//                     book.ratings.push(rating);
//                     console.log(`Rates '${book.title}' by ${book.author} (ISBN: ${book.isbn}) with ${rating} stars.`);
//                 } else {
//                     console.log(`Invalid rating. Ratings must be between 1 and 5.`);
//                 }
//             } else {
//                 console.log(`Book with ISBN ${isbn} not found in the library.`);
//             }
//         },

//         getAverageRating(isbn) {
//             if (isbn in this.books) {
//                 const book = this.books[isbn];
//                 if (book.ratings.length === 0) {
//                     return 0;
//                 }
//                 const sum = book.ratings.reduce((acc, curr) => acc + curr, 0);
//                 return sum / book.ratings.length;
//             } else {
//                 console.log(`Book with ISBN ${isbn} not found in the library.`);
//                 return 0;
//             }
//         },

//         searchBooks(query) {
//             query = query.toLowerCase();
//             const matchingBooks = [];
//             for (const isbn in this.books) {
//                 const book = this.books[isbn];
//                 if (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)) {
//                     matchingBooks.push(book);
//                 }
//             }
//             return matchingBooks;
//         },

//         sortLibrary(criteria) {
//             const sortedBooks = Object.values(this.books).sort((a, b) => {
//                 if (criteria === 'title') {
//                   return a.title.localeCompare(b.title);
//                 } else if (criteria === 'author') {
//                   return a.author.localeCompare(b.author);
//                 } else if (criteria === 'averageRating') {
//                   return b.getAverageRating() - a.getAverageRating();
//                 }
//               });
//               return sortedBooks;
//             },
//         }
//     }

// const library = createLibrary();

/* Add Books: */
// function addBookToLibrary (book) {
//   library.push (book);
// }

// addBookToLibrary (book1); //
// addBookToLibrary (book2);
// addBookToLibrary (book3);
// addBookToLibrary (book4);


// /* Checkout Book:  */
// function checkoutBook (isbn) {
//     if(isbn in this.books) {
//         const book = [isbn];
//     }
 
//   if (book) {
//     book.checkedOut = true;
//     console.log (`Book with ISBN ${isbn} has been checked out.`);
//   } else {
//     console.log (`Book with ISBN ${isbn} was not found.`);
//   }
// }

// /* Return Book: */

// function returnBook (isbn) {
//   const book = library.find (book => {
//     return book.isbn === isbn;
//   });
//   if (book) {
//     book.checkedOut = false;
//     console.log (`Book with ISBN ${isbn} has been returned.`);
//   } else {
//     console.log (`Book with ISBN ${isbn} was not found.`);
//   }
// }


// /* Find Book by Author: */

// function findBooksByAuthor (author) {
//   return library.filter (book => book.author === author);
// }

// const booksByAuthor = findBooksByAuthor ('Ved Vyas'); // enter proper name

  // console.table(booksByAuthor);    // all data of author's book details in library

//----------------------------------------------------------------------------------------------------------
/* Test Cases */

// console.log();                  // space

/*
// case - 1
console.log("Test Case 1: create a few books using new Book().");

const newbook1 = new Book ('Javascript', 'Patelbhai', 123456);
const newbook2 = new Book ('NodeJs', 'Rajubhai', 12);

console.log(newbook1);
console.log(newbook2);
//----
console.log();       // for maintain space in terminal in new case

// case - 2
console.log("Test Case 2: Add these books to the library.");

addBookToLibrary (newbook1);
addBookToLibrary (newbook2);
console.table(library);
// ------
console.log();

// case - 3
console.log("Test Case 3: Check out a few books using their ISBNs.");

checkoutBook(9788193935439);
checkoutBook(100000000001);
/// -----
console.log();

// case - 4
console.log("Test Case 4: Return a book.");

returnBook(9788193935439);
returnBook(100000000001);
/// ------
console.log();
// case - 5
console.log("Test Case 5: Find all books by a specific author.");

 console.table(findBooksByAuthor("Ved Vyas")); 
//----------------------------------------------------------------------------------------------------------
*/


/* Advanced tasks - 2 */

