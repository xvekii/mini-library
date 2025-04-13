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
    
    // Card
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    
    // Card top icons
    const cardTopIconsDiv = document.createElement("div");
    cardTopIconsDiv.classList.add("card-top-icons");
    
    const bookIconSpan = document.createElement("span");
    bookIconSpan.classList.add("card-book-icon-span");

    const bookIcon = document.createElement("img");
    bookIcon.classList.add("book-icon");
    bookIcon.src = "images/book.svg";

    const rmBookBtn = document.createElement("button");
    rmBookBtn.classList.add("rm-book-btn");
    
    const rmBookIcon = document.createElement("img");
    rmBookIcon.classList.add("rm-book-icon");
    rmBookIcon.src = "images/remove-book.svg";

    // Title
    const paraTitle = document.createElement("p");
    paraTitle.classList.add("card-p");
    const spanTitle = document.createElement("span");
    spanTitle.textContent = "Title";
    const spanFillTitle = document.createElement("span");
    spanFillTitle.classList.add("title");

    // Author
    const paraAuthor = document.createElement("p");
    paraAuthor.classList.add("card-p");
    const spanAuthor = document.createElement("span");
    spanAuthor.textContent = "Author";
    const spanFillAuthor = document.createElement("span");
    spanFillAuthor.classList.add("author");

    // Pages
    const paraPages = document.createElement("p");
    paraPages.classList.add("card-p");
    const spanPages = document.createElement("span");
    spanPages.textContent = "Pages";
    const spanFillPages = document.createElement("span");
    spanFillPages.classList.add("pages");

    // Book ID
    const paraID = document.createElement("p");
    paraID.classList.add("card-p");
    const spanID = document.createElement("span");
    spanID.textContent = "Book ID";
    const spanFillID = document.createElement("span");
    spanFillID.classList.add("ID");

    // Year
    const paraYear = document.createElement("p");
    paraYear.classList.add("card-p");
    const spanYear = document.createElement("span");
    spanYear.textContent = "Year";
    const spanFillYear = document.createElement("span");
    spanFillYear.classList.add("year");

    // Read
    const paraRead = document.createElement("p");
    paraRead.classList.add("card-p");
    const spanRead = document.createElement("span");
    spanRead.textContent = "Read";
    const spanFillRead = document.createElement("span");
    spanFillRead.classList.add("read-status");


    // Bottom btns
    const cardBottomBtnsDiv = document.createElement("div");
    cardBottomBtnsDiv.classList.add("card-bottom-buttons");

    const infoIconSpan = document.createElement("span");
    infoIconSpan.classList.add("info-icon-span");

    const infoIcon = document.createElement("img");
    infoIcon.classList.add("info-icon");
    infoIcon.src = src="images/info.svg";

    const bookStatusBtn = document.createElement("button");
    bookStatusBtn.classList.add("book-status-btn");

    const bookStatusIcon = document.createElement("img");
    bookStatusIcon.classList.add("book-status-icon");
    bookStatusIcon.src = "images/book-unread.svg";


    // Appending
    // Card top icons, buttons
    cardContainer.appendChild(newCard);
    newCard.appendChild(cardTopIconsDiv);

    cardTopIconsDiv.appendChild(bookIconSpan);
    bookIconSpan.appendChild(bookIcon);

    cardTopIconsDiv.appendChild(rmBookBtn);
    rmBookBtn.appendChild(rmBookIcon);
    
    // Paragraphs and spans
    newCard.appendChild(paraTitle);
    paraTitle.appendChild(spanTitle);
    paraTitle.appendChild(spanFillTitle);
    
    newCard.appendChild(paraAuthor);
    paraAuthor.appendChild(spanAuthor);
    paraAuthor.appendChild(spanFillAuthor);
    
    newCard.appendChild(paraPages);
    paraPages.appendChild(spanPages);
    paraPages.appendChild(spanFillPages);

    newCard.appendChild(paraID);
    paraID.appendChild(spanID);
    paraID.appendChild(spanFillID);

    newCard.appendChild(paraYear);
    paraYear.appendChild(spanYear);
    paraYear.appendChild(spanFillYear);

    newCard.appendChild(paraRead);
    paraRead.appendChild(spanRead);
    paraRead.appendChild(spanFillRead);

    // Bottom buttons
    newCard.appendChild(cardBottomBtnsDiv);
    cardBottomBtnsDiv.appendChild(infoIconSpan);
  
    infoIconSpan.appendChild(infoIcon);
    cardBottomBtnsDiv.appendChild(bookStatusBtn);
    bookStatusBtn.appendChild(bookStatusIcon);
  });
}