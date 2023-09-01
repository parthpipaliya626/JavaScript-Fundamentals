'use strict';

/* Book Object Creation:
    1.) create a function name createBook(title, author, isbn) and return add default checkOut status
    --> use constructor method to store value.
*/
//----------------------------------------------------------------------------------------------------------
function createBook (title, author, isbn) {
    return {
        title,
        author,
        isbn,
        checkedOut: false,
    };
}
//----------------------------------------------------------------------------------------------------------

/* Library Array: 
    2.) Create a library array in store all the books objects in your library 
    --> use library in array method to store all value.
*/
//----------------------------------------------------------------------------------------------------------
// use constructor method to direct store value
const book1 = createBook ('Bhagavad Gita', 'Ved Vyas', 100000000001);
const book2 = createBook ('the Ocean tour', 'Rajeshbhai', 9874567891011);
const book3 = createBook ('the Great', 'Munnabhai', 6844567891011);
const book4 = createBook ('Mahabharat', 'Ved Vyas', 445675491011);

let library = [];

// library = [createBook ('Mahabharat', 'Ved Vyas', '978-0735219090')];

library = [ 
    {
        title: 'Panchtantra',
        author:'Vishnu Sharma',
        isbn: 9789380171104,
        checkedOut: false
    },
    {
        title: 'Shikshapatri',
        author:'Shree Swaminarayan',
        isbn: 9788193935439,
        checkedOut: false
    },
];
//----------------------------------------------------------------------------------------------------------

/* Add Books: 
   3.) Write a function addBookToLibrary(book) that takes a book object and adds it to the library array.
   --> here, we use function name addBookToLibrary(book)
        in we push method to all data receive(push) in library array data.
*/
//----------------------------------------------------------------------------------------------------------
function addBookToLibrary (book) {
  library.push(book);
}

addBookToLibrary (book1); //
addBookToLibrary (book2);
addBookToLibrary (book3);
addBookToLibrary (book4);

// console.log (library);       // all library data
//----------------------------------------------------------------------------------------------------------

/* Checkout Book:
    4.) Write a function checkoutBook(isbn) that takes an ISBN number,
     searches the library for a book with that ISBN,
     and changes its checkedOut status true.
    --> create function checkoutBook(isbn) in use find method with nested for checkout a book is confirm or not
        and if else condition use to book found or not.
        then we calling checkoutBook function with isbn number for true status.
 */
//----------------------------------------------------------------------------------------------------------
function checkoutBook(isbn) {
    const book = library.find((book) => {
        return (book.isbn === isbn)
    });
    if (book) {
        book.checkedOut = true;
        console.log(`Book with ISBN ${isbn} has been checked out.`);
    } else {
        console.log(`Book with ISBN ${isbn} was not found.`);
    }
}

// calling function checkoutBook
// checkoutBook(9788193935439);
// checkoutBook(100000000001);
// checkoutBook(445675491011);


// library in all book data in table format
// console.table(library);          // all library data with checkedout status

//----------------------------------------------------------------------------------------------------------
/* Return Book:
    5.) Write a function returnBook(isbn) that takes an ISBN number,
         searches the library for book with that ISBN,
          and changes its checkedOut status to true. 
    --> also same as checkedout but this case in return book.
 */
//----------------------------------------------------------------------------------------------------------
function returnBook(isbn) {
    const book = library.find((book) => {
        return (book.isbn === isbn)
    });
    if (book) {
        book.checkedOut = false;
        console.log(`Book with ISBN ${isbn} has been returned.`);
    } else {
        console.log(`Book with ISBN ${isbn} was not found.`);
    }
}

// calling function returnBook
// returnBook(9788193935439);

// library in all book data in table format
// console.table(library);      // all library data with return or not in table format
// console.log(library);       // all library data with return or not in json format

//----------------------------------------------------------------------------------------------------------
/* Find Book by Author:
    6.) Write a function findBooksByAuthor(author) that takes an author's name 
       and returns an array of books writen by that author. 
    --> create function findBooksByAuthor(author) 
*/

function findBooksByAuthor(author) {
        return library.filter(book => book.author === author)
     }

     const booksByAuthor = findBooksByAuthor("Ved Vyas");   // enter proper name
    //  console.log(booksByAuthor);    // all data of author's book details in library
    

//----------------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------------
/* Test Cases
1.) Create a few books using createBook().
2.) Add these books to the library.
3.) Check out a few books using their ISBNs.
4.) Return a book.
5.) Find all books by a specific author.
*/
//----------------------------------------------------------------------------------------------------------





// case - 1
console.log("Test Case 1: create a few books using createBook().");

const newbook1 = createBook ('Javascript', 'Patelbhai', 123456);
const newbook2 = createBook ('NodeJs', 'Rajubhai', 12);

console.log(newbook1);
console.log(newbook2);
//----------------------------------
console.log();

// case - 2
console.log("Test Case 2: Add these books to the library.");

addBookToLibrary (newbook1);
addBookToLibrary (newbook2);
console.table(library);
// ------------------------------------
console.log();

// case - 3
console.log("Test Case 3: Check out a few books using their ISBNs.");

checkoutBook(9788193935439);
checkoutBook(100000000001);
/// -------------------------------------
console.log();

// case - 4
console.log("Test Case 4: Return a book.");

returnBook(9788193935439);
returnBook(100000000001);
/// -------------------------------------
console.log();
// case - 5
console.log("Test Case 5: Find all books by a specific author.");

 console.table(findBooksByAuthor("Ved Vyas")); 