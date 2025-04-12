const dialog = document.getElementById("dialog");
const form = document.getElementById("book-form");
const newBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector(".add-book-btn");

const myLibrary = [];
function Book(title, author, pages, year) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.ID = crypto.randomUUID();
}

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  processFormData();
  
  console.log(myLibrary);
  dialog.close();
  form.reset();
});

function processFormData() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const year = document.getElementById("year").value;

  addBookToLibrary(title, author, pages, year);
}

function addBookToLibrary(title, author, pages, year) {
  const book = new Book(title, author, pages, year);
  myLibrary.push(book);
}
