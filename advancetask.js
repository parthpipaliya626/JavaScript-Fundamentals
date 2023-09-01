// Limit Number of Checkouts:

class Book {
    constructor( title, author, isbn ) {
       
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.checkoutCount = 0;
    }

    checkoutBook() {
        if (this.checkoutCount < Library.MAX_CHECKOUTS) {
            this.checkoutCount++;
            console.log(`Checked out '${this.title}' by ${this.author} (ISBN: ${this.isbn})`);
        } else {
            console.log(`Sorry, '${this.title}' has already been checked out ${Library.MAX_CHECKOUTS} times.`);
        }
    }
}

class Library {
    static MAX_CHECKOUTS = 3;

    constructor() {
        this.books = {};
    }

    addBook(book) {
        this.books[book.isbn] = book;
    }

    checkoutBook(isbn) {
        if (isbn in this.books) {
            const book = this.books[isbn];
            book.checkoutBook();
        } else {
            console.log(`Book with ISBN ${isbn} not found in the library.`);
        }
    }

    listBooks() {
        for (const isbn in this.books) {
            const book = this.books[isbn];
            console.log(`'${book.title}' by ${book.author} (ISBN: ${book.isbn}) - Checked out ${book.checkoutCount} times`);
        }
    }
}

// Usage example:
const library = new Library();

const book1 = new Book( "Indian fighter", "Khali", "123456789");
const book2 = new Book( "Fighter & Actor", "Rock", "987654321" );

library.addBook(book1);
library.addBook(book2);

library.checkoutBook("123456789");
library.checkoutBook("123456789");
library.checkoutBook("123456789");
library.checkoutBook("123456789");  // This should inform the user that it can't be checked out again

library.listBooks();




