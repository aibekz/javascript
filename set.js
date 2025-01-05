class LibrarySet {
    constructor() {
      this.books = [];
    }
  
    // Adds a book with a unique title
    add(book) {
      if (!this.has(book.title)) {
        this.books.push(book);
      }
    }
  
    // Removes a book by its title
    delete(bookTitle) {
      this.books = this.books.filter(book => book.title !== bookTitle);
    }
  
    // Checks if a book with the given title exists in the set
    has(bookTitle) {
      return this.books.some(book => book.title === bookTitle);
    }
  
    // Get the number of books in the library
    get size() {
      return this.books.length;
    }
  
    // Get all book titles in the library
    get allBooks() {
      return this.books.map(book => book.title);
    }
  }
  
  // Define some example books
  const book1 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
  const book2 = { title: "1984", author: "George Orwell" };
  const book3 = { title: "To Kill a Mockingbird", author: "Harper Lee" };
  const book4 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }; // Duplicate book
  
  // Create a new LibrarySet instance
  const library = new LibrarySet();
  
  // Add books to the library
  library.add(book1);
  library.add(book2);
  library.add(book3);
  library.add(book4); // This won't be added, as it's a duplicate
  
  // Output the library details
  console.log("Library contains these books:", library.allBooks); // ["The Great Gatsby", "1984", "To Kill a Mockingbird"]
  console.log("Library size (unique books):", library.size); // 3
  
  // Check if a specific book exists in the library
  console.log("Does the library have '1984'?", library.has("1984")); // true
  console.log("Does the library have 'The Catcher in the Rye'?", library.has("The Catcher in the Rye")); // false
  
  // Remove a book from the library
  library.delete("1984");
  
  console.log("Library after deleting '1984':", library.allBooks); // ["The Great Gatsby", "To Kill a Mockingbird"]
  console.log("Library size after deletion:", library.size); // 2
  