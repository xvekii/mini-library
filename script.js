const dialog = document.getElementById("dialog");
const form = document.getElementById("book-form");
const newBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector(".add-book-btn");
const closeDialogBtn = document.querySelector(".close-dialog-btn");
const cardContainer = document.querySelector(".card-container");

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
  form.reset();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  form.reset();
});

function processFormData() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const year = document.getElementById("year").value;

  addBookToLibrary(title, author, pages, year);
  displayBooks();
}

function addBookToLibrary(title, author, pages, year) {
  const book = new Book(title, author, pages, year);
  myLibrary.push(book);
}

function displayBooks() {
  cardContainer.replaceChildren();

  myLibrary.forEach((book) => {
    console.log(book.title);
    
    // div .card wrapper
    const newCard = document.createElement("div");
    newCard.classList.add("card");

    // div .card-top-icons +
      // span .card-book-icon-span +
        // image .book-icon +
      // btn .rm-book-btn +
        // img .rm-book-icon +
    
    // div .card-top-icons
    const cardTopIconsDiv = document.createElement("div");
    cardTopIconsDiv.classList.add("card-top-icons");
    
    const bookIconSpan = document.createElement("span");
    bookIconSpan.classList.add("card-book-icon-span");

    const bookIcon = document.createElement("img");
    bookIcon.classList.add("book-icon");
    bookIcon.src = "images/book.svg";

    const rmBookBtn = document.createElement("button");
    rmBookBtn.classList.add("rmBookBtn");
    
    const rmBookIcon = document.createElement("img");
    rmBookIcon.classList.add("rm-book-icon");
    rmBookIcon.src = "images/remove-book.svg";


    // p .card-p
      // span Title
      // span .title
    

    // Appending
    // card-top-icons
    cardContainer.appendChild(newCard);
    newCard.appendChild(cardTopIconsDiv);

    cardTopIconsDiv.appendChild(bookIconSpan);
    bookIconSpan.appendChild(bookIcon);

    cardTopIconsDiv.appendChild(rmBookBtn);
    rmBookBtn.appendChild(rmBookIcon);
    
    // p .card-p
      // span Title
      // span .title



    // p .card-p
      // span Author
      // span .author

    // p .card-p
      // span Pages
      // span .pages

    // p .card-p
      // span Book ID
      // span .ID
    
    // p .card-p
      // span Year
      // span .year

    // p .card-p
      // span Read
      // span .read-status


    
    // const title = document.querySelector(".title");
    // const author = document.querySelector(".author");
    // const pages = document.querySelector(".pages");
    // const ID = document.querySelector(".ID");
    // const year = document.querySelector(".year");
    // const read = document.querySelector(".read-status");

    // title.textContent = `${book.title}`; 
    // author.textContent = `${book.author}`; 
    // pages.textContent = `${book.pages}`; 
    // ID.textContent = `${book.ID}`; 
    // year.textContent = `${book.year}`; 
    // read.textContent = "No" ;
    
    
  });
}