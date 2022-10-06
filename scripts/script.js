let myLibrary = []; 

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary () {
    let book = {}
    book.title = prompt('Enter book title');
    book.author = prompt('Enter Author name');
    book.pages = prompt('Enter number of pages');
    book.status = prompt('Status');

    myLibrary.push(book);
    console.log(myLibrary);
}
for (let i = 0; i < 3; i++) {
    addBookToLibrary()
}

function display () {
    for (const book of myLibrary) {
        const bookInfo = document.createElement('div');
        bookInfo.setAttribute('class', 'books');
        const shelf = document.querySelector('#shelf').appendChild(bookInfo);

        const title = document.createElement('div');
        bookInfo.appendChild(title)
        title.textContent = 'Title: '+ book.title;

        const author = document.createElement('div');
        bookInfo.appendChild(author)
        author.textContent = 'Author: ' + book.author;

        const pages = document.createElement('div');
        bookInfo.appendChild(pages)
        pages.textContent = 'Pages: ' + book.pages;

        const status = document.createElement('div');
        bookInfo.appendChild(status)
        status.textContent = 'Status: ' + book.status;

        
    }
}
display()


