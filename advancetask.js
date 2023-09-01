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
}

// Usage example:
const library = new Library();

const book1 = new Book( "Indian fighter", "Khali", "123456789");
const book2 = new Book( "Fighter & Actor", "Rock", "987654321" );

library.addBook(book1);
library.addBook(book2);

book1.checkoutBook(); // Checkout book1
book1.checkoutBook(); // Checkout book1 again


// Simulate an overdue book by setting a past dueDate
book2.dueDate = new Date("2023-08-01"); // Set a past dueDate for book2

console.log("Overdue Books:");
const overdueBooks = library.listOverdueBooks();
overdueBooks.forEach(book => console.log(`'${book.title}' by ${book.author}`));



