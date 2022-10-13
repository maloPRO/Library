let myLibrary = [];

function Book (title,author,pages,isRead) {
    this.title =  title;
    this.author = author
    this.pages = pages;
    this.isRead = isRead
}

function addBookToLibrary () {
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var pages = document.getElementById('pages');
    var isRead = document.getElementById('isRead');


    var book = new Book(title.value, author.value, pages.value, isRead.value);
    myLibrary.push(book);

}

function displayBook () {
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
    myLibrary = []
};

form = document.getElementById('myForm');
function handleForm(event) {
    event.preventDefault();

}
form.addEventListener('submit', handleForm);


displayForm = () => {
    document.getElementById('form-container').style.display = 'block';
}

closeForm = () => {
    document.getElementById('form-container').style.display = 'none';
}

document.getElementById('addBook').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);
document.getElementById('submitBtn').addEventListener('click', addBookToLibrary);
document.getElementById('submitBtn').addEventListener('click', displayBook);