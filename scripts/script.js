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
        

        const title = document.createElement('div');
        bookInfo.appendChild(title)
        if (book.title === '') {
            alert('Enter book title');
        } else title.textContent = 'Title: '+ book.title;

        const author = document.createElement('div');
        bookInfo.appendChild(author)
        if (book.author === '') {
            alert ("Enter author's name");
        } else author.textContent = 'Author: ' + book.author;

        const pages = document.createElement('div');
        bookInfo.appendChild(pages)
        if (book.pages === '') {
            alert("Enter number of pages")
        } else pages.textContent = 'Pages: ' + book.pages;

        const status = document.createElement('div');
        const checkbx = document.getElementById('isRead');
        bookInfo.appendChild(status);

        if (checkbx.checked == true) {
            status.textContent = 'Read: Yes';
        } else {
            status.textContent = 'Read: NO';
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.textContent = 'Delete';
        bookInfo.appendChild(deleteBtn);

        const shelf = document.querySelector('#shelf').appendChild(bookInfo);

        
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
    form.reset();
}

document.getElementById('addBook').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);
document.getElementById('submitBtn').addEventListener('click', addBookToLibrary);
document.getElementById('submitBtn').addEventListener('click', displayBook);

//delete book
function deleteBook () {
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.parentElement.remove()
};

console.log(myLibrary)
