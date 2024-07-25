// You are building a simple application for a library. You need to implement a function called findBook that simulates finding a book by its title in the library's catalog. However, there are some special requirements:

// If the book with the specified title is found, the function should return the book's information as an object with properties: title, author, and availability.

// If the book is not found, the function should throw a custom error with the message: "Book not found in catalog."

// Regardless of whether the book is found or not, you need to ensure that a specific cleanup action, such as logging, always occurs after the function is executed.

// Write the findBook function that implements these requirements using a try-catch-finally block.

// Sample catalog of books
const catalog = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", availability: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", availability: false },
    { title: "1984", author: "George Orwell", availability: true },

  ];
async function findbook(search)
  {
    try{
        bookdata= catalog.find(book =>book.title==search);   
        if(!bookdata)
        {
            throw error
        }
            return bookdata;
    }
     catch
    {
         return 'Book Not Found'; 
    }
  
  finally
  {
     console.log(`Search Complete`);
  }
  }
 console.log(findbook(184)); 

  