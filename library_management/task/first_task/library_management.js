/*  Library Management  */

'use strict';

function createBook (title, author, isbn) {
  return {
    title,
    author,
    isbn,
    checkedOut: false,
  };
}

const book1 = createBook ('Bhagavad Gita', 'Ved Vyas', 100000000001);
const book2 = createBook ('the Ocean tour', 'Rajeshbhai', 9874567891011);
const book3 = createBook ('the Great', 'Munnabhai', 6844567891011);
const book4 = createBook ('Mahabharat', 'Ved Vyas', 445675491011);

/* library array */

let library = [];

library = [
  {
    title: 'Panchtantra',
    author: 'Vishnu Sharma',
    isbn: 9789380171104,
    checkedOut: false,
  },
  {
    title: 'Shikshapatri',
    author: 'Shree Swaminarayan',
    isbn: 9788193935439,
    checkedOut: false,
  },
];

/* Add Books: */
function addBookToLibrary (book) {
  library.push (book);
}

addBookToLibrary (book1); //
addBookToLibrary (book2);
addBookToLibrary (book3);
addBookToLibrary (book4);


/* Checkout Book:  */
function checkoutBook (isbn) {
  const book = library.find (book => {
    return book.isbn === isbn;
  });
  if (book) {
    book.checkedOut = true;
    console.log (`Book with ISBN ${isbn} has been checked out.`);
  } else {
    console.log (`Book with ISBN ${isbn} was not found.`);
  }
}

/* Return Book: */

function returnBook (isbn) {
  const book = library.find (book => {
    return book.isbn === isbn;
  });
  if (book) {
    book.checkedOut = false;
    console.log (`Book with ISBN ${isbn} has been returned.`);
  } else {
    console.log (`Book with ISBN ${isbn} was not found.`);
  }
}


/* Find Book by Author: */

function findBooksByAuthor (author) {
  return library.filter (book => book.author === author);
}

const booksByAuthor = findBooksByAuthor ('Ved Vyas'); // enter proper name

  // console.table(booksByAuthor);    // all data of author's book details in library

//----------------------------------------------------------------------------------------------------------
/* Test Cases */

console.log();                  // space


// case - 1
console.log("Test Case 1: create a few books using createBook().");

const newbook1 = createBook ('Javascript', 'Patelbhai', 123456);
const newbook2 = createBook ('NodeJs', 'Rajubhai', 12);

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

