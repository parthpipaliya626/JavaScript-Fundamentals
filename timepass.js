// Book object creation
function createBook(title, author, isbn) {
    const book = {
             title: title,
             author: author,
             isbn: isbn,
             checkedOut: false,
             checkoutCount: 0,
    };
    return book;   
  } 
  
 // Library Array 
  let library = [];
  

 // Add Books 
    function addBookToLibrary(book){
      library.push(book);
  }
  
  let book1 = createBook("book01", "author1", 11111111);
  let book2 = createBook("book02", "author2", 115511111);
  let book3 = createBook("book02", "author1", 115511111);
  
  addBookToLibrary(book1);
  addBookToLibrary(book2);
  addBookToLibrary(book3);
//   console.table(library);
  
  // Checkout Book
  // const MAX_CHECKOUTS = [3];

    function checkoutBook(isbn) {
        const book = library.find(book => book.isbn === isbn);
    if (book) {
        if(!book.checkedOut) {
        // if(this.checkoutCount < library.MAX_CHECKOUTS) {
    //         book.checkedOut = true;
    //         this.checkoutCount++;

    //         const dueDate = new Date();
    //         dueDate.setDate(dueDate.getDate() + 14);
    //         this.dueDate = dueDate;
    //     }
    }
      return book.isbn === isbn;
      }
      if (book) {
        book.checkedOut = true;
        console.log(`Book with ISBN ${isbn} has been checked out.`);
      } else {
        console.log(`Book with ISBN ${isbn} was not found.`);
      }
  }

// Return Book
  function returnBook(isbn) {
    const book = library.find(book => {
      return book.isbn === isbn;
      });
      if (book) {
        book.checkedOut = false;
        console.log(`Book with ISBN ${isbn} has been returned.`);
      } else {
        console.log(`Book with ISBN ${isbn} was not returned.`);
      }
  }

  // Find Book by Author
  function findBooksByAuthor(author) {
    return library.filter(book => book.author === author);
  }





  // test 1: Create a few books using createBook().
        
        console.log("Test 1: create books. "); 
        const Book4 = createBook("Bhagvat geeta", "Ved Vyas", 122222);
        const Book5 = createBook("Mahabharat", "Ved Vyas", 21);
        console.log(Book4);
        console.log(Book5);

// test 2: Add these books to the library.
console.log();
        console.log("Test 2: add book to library.");
        addBookToLibrary(Book4);
        addBookToLibrary(Book5);
        console.table(library);

// test 3: Check out a few books using their isbn
console.log();
        console.log("Test 3: checkout book.");
        checkoutBook(21);        
        checkoutBook(115511111);      
        console.log(checkoutBook);  

// test 4: Returned a few books using their isbn
console.log();
        console.log("Test 4: return book.");
        returnBook(21);        
        returnBook(115511111);      
        console.log(returnBook);  

// test 5: Find all books by a specific author.
console.log();
        console.log("Test 5: find book by author.");
        const booksByAuthor = findBooksByAuthor ('author1');
        console.table(booksByAuthor);


