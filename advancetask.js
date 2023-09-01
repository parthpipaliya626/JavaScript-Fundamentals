// Limit Number of Checkouts:
/* scenario:
    each book only 3 times checkedOut use const MAX_CHECKOUTS 
      and use checkoutBook(isbn) to checked out each book 
       and increment the count then MAX_CHECKOUTS limit over then
        don't allow the checkout and inform the user 


      */

class Book {
    constructor( title, author, isbn ) {
       
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.checkoutCount = 0;
        this.dueDate = null;      // Initialize dueDate to null 
        this.ratings = []; // Initialize ratings as an empty array
    }

    checkoutBook() {
         if (this.checkoutCount < Library.MAX_CHECKOUTS) {
            this.checkoutCount++;

            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 14);     // checkout date to 14 days of Due date
            this.dueDate = dueDate;                // set the duedate property

            console.log(`Checked out '${this.title}' by ${this.author} (ISBN: ${this.isbn})`);
         } else {
            console.log(`Sorry, '${this.title}' has already been checked out ${Library.MAX_CHECKOUTS} times.`);
         }
    }

    isOverdue() {
        if (this.dueDate) {
            return new Date() > new Date(this.dueDate);
        }
        return false;
    }

    rateBook(rating) {
        if (rating >= 1 && rating <= 5) {
            this.ratings.push(rating);    // Add the rating to the ratings array
            console.log(`Rated '${this.title}' by ${this.author} (ISBN: ${this.isbn}) with ${rating} stars.`);
        } else {
            console.log(`Invalid rating. Ratings must be between 1 and 5.`);
        }
    }

    getAverageRating() {
        if (this.ratings.length === 0) {
            return 0;
        }
        const sum = this.ratings.reduce((acc, curr) => acc + curr, 0);
        return sum / this.ratings.length;   // calculate the average rating
    }
}

class Library {
    static MAX_CHECKOUTS = 3;

    constructor() {
        this.books = {};
    }

    addBook(book) {
        if (this.books[book.isbn]) {
            console.log(`A book with ISBN ${book.isbn} already exists.`);
        } else {
            this.books[book.isbn] = book;
            console.log(`Added '${book.title}' by ${book.author} (ISBN: ${book.isbn}) to the library.`);
        }
    }

    checkoutBook(isbn) {
        if (isbn in this.books) {
            const book = this.books[isbn];
            book.checkoutBook();
        } else {
            console.log(`Book with ISBN ${isbn} not found in the library.`);
        }
    }

    listOverdueBooks() {
        const overdueBooks = [];
        for (const isbn in this.books) {
            const book = this.books[isbn];
            if(book.isOverdue()) {
                overdueBooks.push(book);
            }
        }
        return overdueBooks;
    }

    rateBook(isbn, rating) {
        if (isbn in this.books) {
            const book = this.books[isbn];
            book.rateBook(rating);
        } else {
            console.log(`Book with ISBN ${isbn} not found in the library.`);
        }
    }

    getAverageRating(isbn) {
        if (isbn in this.books) {
            const book = this.books[isbn];
            return book.getAverageRating();
        } else {
            console.log(`Book with ISBN ${isbn} not found in the library.`);
            return 0;
        }
    }
}

// Usage example:
const library = new Library();

const book1 = new Book( "Indian fighter", "Khali", "123456789");
const book2 = new Book( "Fighter & Actor", "Rock", "987654321");

library.addBook(book1);
library.addBook(book2);

book1.checkoutBook(); // Checkout book1
book1.checkoutBook(); // Checkout book1 again

book1.rateBook(4); // Rate book1 with 4 stars
book1.rateBook(5); // Rate book1 with 5 stars


// // Simulate an overdue book by setting a past dueDate
// book2.dueDate = new Date("2023-08-01"); // Set a past dueDate for book2

// console.log("Overdue Books:");
// const overdueBooks = library.listOverdueBooks();
// overdueBooks.forEach(book => console.log(`'${book.title}' by ${book.author}`));



console.log(`Average rating for 'The Great Gatsby': ${library.getAverageRating("123456789").toFixed(2)}`);

console.log(`Average rating for 'To Kill a Mockingbird': ${library.getAverageRating("987654321").toFixed(2)}`);
