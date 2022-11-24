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

const displayForm = () => {
  document.getElementById('form-container').style.display = 'block';
}   

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

  const bookStatus = document.createElement('button');
  bookInfo.appendChild(bookStatus);

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'deleteBook');
  bookInfo.appendChild(deleteBtn);

  bookContainer.appendChild(bookInfo);

  bookTitle.textContent = 'Title: ' + titleInput.value;
  bookAuthor.textContent = 'Author: ' + authorInput.value;
  bookPages.textContent = 'Pages: ' + pagesInput.value;
  deleteBtn.textContent = 'Delete';
  
  if (readStatus.checked == true) {
    bookStatus.textContent = 'Read';
    bookStatus.classList.add('read');
  } else {
   bookStatus.textContent = 'Not read';
   bookStatus.classList.add('notRead');
  } 
  
  bookStatus.addEventListener('click', () => {
    if (bookStatus.textContent === 'Read') {
      bookStatus.textContent = 'Not Read';
      bookStatus.classList.remove('read');
      bookStatus.classList.add('notRead');
    } else if (bookStatus.textContent === 'Not read') {
      bookStatus.textContent = 'Read';
      bookStatus.classList.remove('notRead');
      bookStatus.classList.add('read');
    }
  })
  
  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.remove();
    
  })
}

// Form validation
  const titleError = document.querySelector("#title + span.error");
  const authorError = document.querySelector("#author + span.error");
  const pagesError = document.querySelector("#pages + span.error")

  titleInput.addEventListener("input", (event) => {
    if (title.validity.valid) {
      titleError.textContent = '';
      titleError.className = 'error';
    } else {
      showError();
    }
  })



form.addEventListener('submit', (event) => {
  if (!titleInput.validity.valid) {
    showError();
  }

  event.preventDefault();
});

const showError = () => {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = 'Please Enter a title'
  } else if (titleInput.validity.typeMismatch) {
    titleError.textContent = 'has to be text'
  }
}
document.getElementById('newBookBtn').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);


