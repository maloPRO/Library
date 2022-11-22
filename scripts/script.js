const myBooks = [];
const bookContainer = document.getElementById('library');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readStatus = document.getElementById('isRead');
const form = document.getElementById('myForm');

class Book {
  constructor (title, author, pages, isRead) {
    this.title =  title;
    this.author = author
    this.pages = pages;
    this.isRead = isRead;
  }
}

const handleForm = (event) => {
  displayBook()
  closeForm()
  event.preventDefault();
}


const displayForm = () => document.getElementById('form-container').style.display = 'block';  

const closeForm = () => {
  document.getElementById('form-container').style.display = 'none';
  form.reset();
}


const displayBook = () => {
  const book = new Book(pagesInput.value, authorInput.value, pagesInput.value, readStatus.value);
  myBooks.push(book);

  const bookInfo = document.createElement('div');
  bookInfo.setAttribute('class', 'books');

  const bookTitle = document.createElement('div');
  bookTitle.setAttribute('class', 'title');
  bookInfo.appendChild(bookTitle);

  const bookAuthor = document.createElement('div');
  bookAuthor.setAttribute('class', 'author');
  bookInfo.appendChild(bookAuthor);

  const bookPages = document.createElement('div');
  bookPages.setAttribute('class', 'pages');
  bookInfo.appendChild(bookPages);

  const bookStatus = document.createElement('div');
  bookStatus.setAttribute('class', 'status');
  bookInfo.appendChild(bookStatus);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'deleteBook');
  bookInfo.appendChild(deleteBtn);

  bookContainer.appendChild(bookInfo);

  bookTitle.textContent = 'Title: ' + titleInput.value;
  bookAuthor.textContent = 'Author ' + authorInput.value;
  bookPages.textContent = 'Pages: ' + pagesInput.value;
  deleteBtn.textContent = 'Delete';
  
  if (readStatus.checked == true) {
    bookStatus.textContent = 'Status: Read';
  } else {
   bookStatus.textContent = 'Status: Not read';
  }  
  console.log(myBooks);

  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.remove();
    
  })
}


form.addEventListener('submit', handleForm);
document.getElementById('newBookBtn').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);


