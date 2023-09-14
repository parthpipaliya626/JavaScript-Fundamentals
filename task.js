/*  Library Management  */

'use strict';
class Book {
     constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.checkout = false;
        this.checkoutCount = 0;
        this.dueDate = null; 
        this.ratings = [];
  };


//  book1 = createBook ('Bhagavad Gita', 'Ved Vyas', 100000000001);
//  book2 = createBook ('the Ocean tour', 'Rajeshbhai', 9874567891011);
//  book3 = createBook ('the Great', 'Munnabhai', 6844567891011);
//  book4 = createBook ('Mahabharat', 'Ved Vyas', 445675491011);


/* Add Books: */
// function addBookToLibrary (book) {
//   library.push (book);
// }

// addBookToLibrary (book1); //
// addBookToLibrary (book2);
// addBookToLibrary (book3);
// addBookToLibrary (book4);


/* Checkout Book:  */

   checkoutBook (isbn) {
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

 returnBook (isbn) {
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

 findBooksByAuthor (author) {
  return library.filter (book => book.author === author);
}

 booksByAuthor = findBooksByAuthor ('Ved Vyas'); // enter proper name
}

