let myLibrary = [];

class Book {
    constructor (title, author, pages, isRead) {
        this.title =  title;
        this.author = author
        this.pages = pages;
        this.isRead = isRead;
    }
}


function addBookToLibrary () {
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var pages = document.getElementById('pages');
    var isRead = document.getElementById('isRead');

    const book = new Book(title.value, author.value, pages.value, isRead.value);
    
    myLibrary.push(book);
}

function displayBook () {
    for (const book of myLibrary) {
        
        const shelf = document.querySelector('#shelf');
        const bookInfo = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const checkbx = document.getElementById('isRead');


        bookInfo.setAttribute('class', 'books');
        title.setAttribute('class', 'bookSection');
        author.setAttribute('class', 'bookSection');
        pages.setAttribute('class', 'bookSection');
        status.setAttribute('class', 'bookSection');
        deleteBtn.setAttribute('class', 'deleteBtn');
        
        
        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(pages);
        bookInfo.appendChild(status);
        bookInfo.appendChild(deleteBtn);
        shelf.appendChild(bookInfo);

        
        if (book.title === '') {
            alert('Enter book title');
        } else {
            title.textContent = 'Title: '+ book.title;
        }

        
        if (book.author === '') {
            alert ("Enter author's name");
        } else {
            author.textContent = 'Author: ' + book.author;
        }

        
        if (book.pages === '') {
            alert("Enter number of pages")
        } else {
            pages.textContent = 'Pages: ' + book.pages;
        }

        
        if (checkbx.checked == true) {
            status.textContent = 'Read: Yes';
        } else {
            status.textContent = 'Read: NO';
        }

        
        deleteBtn.textContent = 'Delete';
           
    }
        myLibrary = [];
};

form = document.getElementById('myForm');
    function handleForm(event) {
        event.preventDefault();
}


displayForm = () => {
    document.getElementById('form-container').style.display = 'block';
}


closeForm = () => {
    document.getElementById('form-container').style.display = 'none';
    form.reset();
}

deleteBook = () => {

    var books = document.querySelectorAll('.books');
    var deleteBtns = document.querySelectorAll('.books :nth-child(5)');

    for (const book of books) {
        for (const deleteBtn of deleteBtns) {
            deleteBtn.addEventListener('click', () => {
                deleteBtn.parentElement.remove()
            })
        }        
    }
}

form.addEventListener('submit', handleForm);
document.getElementById('addBook').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);
document.getElementById('submitBtn').addEventListener('click', addBookToLibrary);
document.getElementById('submitBtn').addEventListener('click', displayBook);
document.getElementById('submitBtn').addEventListener('click', deleteBook);






