
function createBook(title, author, isbn) {
    const book = {
             title: title,
             author: author,
             isbn: isbn,
             checkedOut: false
    };
    return book;   
  } 
  
  let library = [];
  
    function addBookToLibrary(book){
      library.push(book);
  }
  
  let book1 = createBook("book01", "author1", 11111111);
  let book2 = createBook("book02", "author2", 115511111);
  
  addBookToLibrary(book1);
  addBookToLibrary(book2);
  console.table(library);
  
  
  function checkoutBook(isbn) {
    const book = library.find(book => {
      return book.isbn === isbn;
      });
      if (book) {
        book.checkedOut = true;
        console.log(`Book with ISBN ${isbn} has been checked out.`);
      } else {
        console.log(`Book with ISBn ${isbn} was not found.`);
      }
  }