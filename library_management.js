/*  Library Management  */


// Book Object Creation:
 /* Create a function createBook(title, author, isbn) that takes in a book's title, author, and ISBN and returns an object with the given details and a default checkedOut status of false */

function createBook (title, author, isbn) {
  return { title, author, isbn, checkedOut: false, 
      };
}

// Create an array library that will store all the book objects.

const library = [];



// Add books to the library using the createBook function
library.push(createBook("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"));
library.push(createBook("1984", "George Orwell", "978-0-452-28423-4"));
library.push(createBook("The world War", "George Orwell", "978-0-452-28423-3"));
library.push(createBook("Brave New World", "Aldous Huxley", "978-0-06-085052-4"));


// add books to the library with addBookToLibrary(book) function 
function addBookToLibrary(book){
    library.push(book);
}

// function to find a book by its isbn with checkedoutBook(isbn) 
 function findBookByISBN(isbn) {
    return library.find((book) => book.isbn === isbn);
 }


 // function to check out a book by its ISBN 
 function checkoutBook(isbn) {
    const book = findBookByISBN(isbn);
    if (book) {
        book.checkedOut = true;
        console.log(`Checked out "${book.title}" by ${book.author} `);
    } else {
        console.log(`Book with ISBN ${isbn} not found in the library.`);
    }
 }


 // Function to return a book by its ISBN

 function returnBook(isbn) {
    const book = findBookByISBN(isbn);
    if (book) {
        book.checkedOut = false;
        console.log(`Returned "${book.title}" by ${book.author}`);
    } else {
        console.log(`Book with ISBN ${isbn} not found in the library.`);
    }
 }

 // Function to find books by a specific author
 function findBooksByAuthor(author) {
    return library.filter((book) => book.author === author);
 }



 // Test cases
// 1, 2 
 addBookToLibrary(createBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5"));

// 3
checkoutBook("978-0-452-28423-4");

// 4
returnBook("978-0-452-28423-4");


// 5

// console.log("Books by George Orwell: ");
// console.log(findBooksByAuthor("George Orwell"));

// console.log("Library contents:");

console.log(library);

