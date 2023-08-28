

// const bookList = document.getElementById("bookList");
//     const addBookForm = document.getElementById("addBookForm");

//     // Array to store book data
//     const books = [];

//     // Function to add a book
//     function addBook(title, author, isbn) {
//         const book = { title, author, isbn };
//         books.push(book);
//         displayBooks();
//         clearForm();
//     }

//     // Function to display books
//     function displayBooks() {
//         bookList.innerHTML = "";

//         // Display books from the books array
//         books.forEach((book, index) => {
//             const li = document.createElement("li");
//             li.innerHTML = `Title: "${book.title}"  Auther: "${book.author}"  Isbn: "${book.isbn}"   <button onclick="removeBook(${index})">Remove</button>`;
//             bookList.appendChild(li);
//         });

//         // Display books from the library array
//         library.forEach((book) => {
//             const li = document.createElement("li");
//             const status = book.checkedOut ? "Checked Out" : "Available";
//             li.innerHTML = `Title: "${book.title}" Author: "${book.author}" ISBN: "${book.isbn}" Status: ${status}   <button onclick="removeBook(${index})">Remove</button> `;
//             bookList.appendChild(li);
//         });
//     }

//     // Function to remove a book
//     function removeBook(index) {
//         books.splice(index, 1);
//         displayBooks();
//     }

//     // Function to clear the form
//     function clearForm() {
//         addBookForm.reset();
//     }

//     // Event listener for adding a book
//     addBookForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const title = document.getElementById("title").value;
//         const author = document.getElementById("author").value;
//         const isbn = document.getElementById("isbn").value;
//         if (title && author && isbn) {
//             addBook(title, author, isbn);
//         }
//     });

//     // Initial display of books
//     displayBooks();





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

console.log(library);