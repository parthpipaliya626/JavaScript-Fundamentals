// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//         this.checkedOut = false;
//         this.checkoutCount = 0;
//         this.transactions = [];
//         this.reviews = [];
//     }

//     checkout() {
//         if(!this.checkedOut && this.checkoutCount < MAX_CHECKOUTS) {
//             this.checkedOut = true;
//             this.checkoutCount++;
//             this.transactions.push({
//                 type: "checkout",
//                 date: new Date(),
//             });
//      console.log(`Book "${this.title}" has been checked out.`);
//     } else if (this.checkedOut) {
//         console.log(`Book "${this.title}" is already checked out.`);
//     } else {
//         console.log(`Book "${this.title}" has reached the maximum allowed checkouts.`);
//     }
//  }

//     return (user, date) {
//         if(this.transactions.length === 0 || this.transactions[this.transactions.length - 1].type === 'return') {
//             throw new Error('InvalidOperationError: The book is not checked out.');
//         }

//         this.transactions.push({ date, type: 'return', user });
//         user.removeBorrowedBook(this);
//     }

//     rate(user, rating, content) {
//         this.reviews.push({ user, rating, content });
//     }

//     getAverageRating() {
//         if(this.reviews.length === 0) {
//             return 0;
//         }

//         const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
//         return totalRating / this.reviews.length;
//     }

//     getReviewCount() {
//         return this.reviews.length;
//     }

//     filterReviews(minRating, searchTerm) {
//         return this.reviews.filter(
//             (review) => review.rating >= minRating && (!searchTerm || review.content.includes(searchTerm))
//         );
//     }
// }


// class User {
//     constructor(name, libraryCardNumber) {
//         this.name = name;
//         this.libraryCardNumber = libraryCardNumber;
//         this.borrowedBooks = [];
//     }

//     addBorrowedBook(book, date) {
//         this.borrowedBooks.push({ book, date });
//       }
    
//       removeBorrowedBook(book) {
//         this.borrowedBooks = this.borrowedBooks
//       }


// }


// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.checkedOut = false;
        this.checkoutCount = 0;
        this.rating = [];
        this.transactions = [];
        this.borrowedBooks = [];
    }

    // checkout() {
    //     if (!this.checkedOut && this.checkoutCount < MAX_CHECKOUTS) {
    //         this.checkedOut = true;
    //         this.checkoutCount++;
    //         this.transactions.push({
    //             type: "checkout",
    //             date: new Date(),
    //         });
    //         console.log(`Book "${this.title}" has been checked out.`);
    //     } else if (this.checkedOut) {
    //         console.log(`Book "${this.title}" is already checked out.`);
    //     } else {
    //         console.log(`Book "${this.title}" has reached the maximum allowed checkouts.`);
    //     }
    // }

    checkoutBook(book, dueDate) {
        // const book = library.find((b) => b.isbn === isbn);
        // const user = users.find((u) => u.userId === userId);
    
        if (book && user) {
            if (!book.checkedOut) {
                book.checkedOut = true;
                book.borrowedBy = userId;
                book.dueDate = new Date(); // Set a due date (you can define your logic here)
                user.borrowedBooks.push({ isbn: isbn, dueDate: book.dueDate });
                console.log(`Book "${book.title}" has been checked out by ${user.name}.`);
            } else {
                console.log(`Book "${book.title}" is already checked out.`);
            }
        } else {
            console.log(`Book with ISBN "${isbn}" or user with ID "${userId}" not found.`);
        }
    }
    

    return() {
        if (this.checkedOut) {
            this.checkedOut = false;
            this.transactions.push({
                type: "return",
                date: new Date(),
            });
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" is not checked out.`);
        }
    }

    rate(rating) {
        if (rating >= 1 && rating <= 5) {
            this.rating.push(rating);
            console.log(`Book "${this.title}" has been rated with ${rating} stars.`);
        } else {
            console.log("Rating should be between 1 and 5.");
        }
    }

    getAverageRating() {
        const totalRating = this.rating.reduce((acc, current) => acc + current, 0);
        const averageRating = totalRating / this.rating.length || 0;
        return averageRating;
    }
}

// Library class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        const existingBook = this.books.find((b) => b.isbn === book.isbn);
        if (!existingBook) {
            this.books.push(book);
            console.log(`Book "${book.title}" has been added to the library.`);
        } else {
            console.log(`A book with ISBN "${book.isbn}" already exists in the library.`);
        }
    }

    checkoutBook(isbn) {
        const book = this.books.find((b) => b.isbn === isbn);
        if (book) {
            book.checkout();
        } else {
            console.log(`Book with ISBN "${isbn}" not found in the library.`);
        }
    }

    returnBook(isbn) {
        const book = this.books.find((b) => b.isbn === isbn);
        if (book) {
            book.return();
        } else {
            console.log(`Book with ISBN "${isbn}" not found in the library.`);
        }
    }

    findBooksByAuthor(author) {
        return this.books.filter((book) => book.author === author);
    }

    searchBooks(query) {
        query = query.toLowerCase();
        return this.books.filter(
            (book) =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
        );
    }

    sortLibrary(criteria) {
        if (criteria === "title") {
            this.books.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === "author") {
            this.books.sort((a, b) => a.author.localeCompare(b.author));
        } else if (criteria === "averageRating") {
            this.books.sort((a, b) => b.getAverageRating() - a.getAverageRating());
        }
    }
}

// Constants
const MAX_CHECKOUTS = 3; // Maximum allowed checkouts for each book

// Create library and books
const myLibrary = new Library();
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4");
const book2 = new Book("1984", "George Orwell", "978-0-452-28423-4");
const book3 = new Book("Brave New World", "Aldous Huxley", "978-0-06-085052-4");

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Check out and return books
book1.checkout();
book2.checkout();
book1.return();

// Rate books
book1.rate(4);
book2.rate(5);

// Find books by author
const booksByHarperLee = myLibrary.findBooksByAuthor("Harper Lee");
console.log("Books by Harper Lee:", booksByHarperLee);

// Search books
const searchResults = myLibrary.searchBooks("1984");
console.log("Search Results:", searchResults);

// Sort library by average rating
myLibrary.sortLibrary("averageRating");
console.log("Library sorted by average rating:", myLibrary.books);

