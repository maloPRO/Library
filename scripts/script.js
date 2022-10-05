let myLibrary = []; 

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
      return `the book is ${this.title}, the author is ${this.author} with ${this.pages} pages`
    }
}
function addBookToLibrary() {
  newBook = new Book(prompt('Enter Book Title'), prompt("Enter author's name"), prompt("Enter number of pages"), prompt("Read or unread, Enter 1 for read 2 for unread"));
  myLibrary.push(newBook);
}
addBookToLibrary()
console.log(myLibrary[0])

