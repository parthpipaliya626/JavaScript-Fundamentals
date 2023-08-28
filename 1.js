// Book object creation:
/*
  -  Create a function createBook(title, author, isbn) that takes
     in a book's title, author, and ISBN 
         and returns an object with the given details
             and a default checkedOut status of false.

*/ 

function createBook(title, author, isbn) {
    return {
      title: title,
      author: author,
      isbn: isbn,
      checkedOut: false 
   };
}




// Library Array
/* 
-  Create an array library that will store all the book objects
*/

// Create a function to add a book to the library

function addBookToLibrary(library, title, author, isbn) {
const newBook = createBook(title, author, isbn);
library.push(newBook);
}

const library = [];

addBookToLibrary(library, "The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565");
addBookToLibrary(library, "To Kill a Mockingbird", "Harper Lee", "978-0061120084");
addBookToLibrary(library, "1984", "George Orwell", "978-0451524935");

console.log(library); 