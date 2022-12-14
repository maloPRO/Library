const myBooks = JSON.parse(localStorage.getItem('books')) || [];
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

const displayForm = () => {
  document.getElementById('form-container').style.display = 'block';
}   

const closeForm = () => {
  document.getElementById('form-container').style.display = 'none';
  form.reset();
}

const newBook = (title, author, pages, isRead) => {
  const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus.value);
  myBooks.push(book);
  localStorage.setItem('books', JSON.stringify(myBooks));

  return { title, author, pages, isRead }
}
const displayBook = ({title, author, pages, isRead}) => {

  const bookInfo = document.createElement('div');
  const bookTitle = document.createElement('div');
  const bookAuthor = document.createElement('div');
  const bookPages = document.createElement('div');
  const bookStatus = document.createElement('button');
  const deleteBtn = document.createElement('button');

  bookInfo.setAttribute('class', 'books');
  bookTitle.setAttribute('class', 'title');
  bookAuthor.setAttribute('class', 'author');
  bookPages.setAttribute('class', 'pages');
  deleteBtn.setAttribute('class', 'deleteBook');

  bookInfo.append(bookTitle, bookAuthor, bookPages, bookStatus, deleteBtn);
  bookContainer.appendChild(bookInfo);

  bookTitle.textContent = 'Title: ' + title;
  bookAuthor.textContent = 'Author: ' + author;
  bookPages.textContent = 'Pages: ' + pages;
  deleteBtn.textContent = 'Delete';
  
  if (isRead === 'yes') {
    bookStatus.textContent = 'Read';
    bookStatus.setAttribute('class', 'read');
  } else {
   bookStatus.textContent = 'Not read';
   bookStatus.setAttribute('class', 'notRead');
   
  }
  
  bookStatus.addEventListener('click', () => {
    if (bookStatus.className == 'read') {
      bookStatus.textContent = 'Not Read';
      bookStatus.classList.remove('read');
      bookStatus.classList.add('notRead');
    } else if (bookStatus.className === 'notRead') {
      bookStatus.textContent = 'Read';
      bookStatus.classList.remove('notRead');
      bookStatus.classList.add('read');
    }
  })
  
  deleteBtn.addEventListener('click', function () {
    this.parentElement.remove();
    myBooks.forEach((book, index) => {
      myBooks.splice(index, 1)
      localStorage.setItem('books', JSON.stringify(myBooks));

    })
  })
}
const handleForm = (event) => {
  event.preventDefault(); 
  const book = newBook(titleInput.value, authorInput.value, pagesInput.value, readStatus.value)
  displayBook(book)
  closeForm()
  
}

myBooks.forEach(displayBook)
form.addEventListener('submit', handleForm);
document.getElementById('newBookBtn').addEventListener('click', displayForm);
document.getElementById('closeForm').addEventListener('click', closeForm);


