"use strict";

let library = [];

/* Book Object Creation:
    1.) create a function name createBook(title, author, isbn) and return add default checkOut status
    --> use constructor method to store value.
*/

function createBook(title, author, isbn) {
    return {
         title, author, isbn, checkedOut: false,
    };
}

/* Library Array: 
    2.) Create a library array in store all the books objects in your library 
    --> use library in array method to store all value.
*/
 library = [   
            createBook( "Mahabharat", "Ved Vyas", "978-0735219090" ),
];

// use constructor method to direct store value
const book1 = createBook( "the worldtour", "Rajubhai", 1234567891011 );
const book2 = createBook( "the Ocean tour", "Rajeshbhai", 9874567891011);


/* Add Books: 
   3.) Write a function addBookToLibrary(book) that takes a book object and adds it to the library array.
   --> here, we use function name addBookToLibrary(book)
        in we push method to all data receive(push) in library array data.

*/
 function addBookToLibrary(book) {
    library.push(book);
      };

 addBookToLibrary(book1);      // 
 addBookToLibrary(book2);

 console.log(library);


 /* Checkout Book:
    4.) Write a function checkoutBook(isbn) that takes an ISBN number,
     searches the library for a book with that ISBN,
     and changes its checkedOut status true.
    --> create function checkoutBook(isbn) in use find method with nested for checkout a book
        and if else condition use 
 */





