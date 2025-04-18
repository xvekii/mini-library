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
  this.ID = crypto.randomUUID();
  this.year = year;
  this.read = "No";
}

Book.prototype.toggleReadStatus = function() {
  this.read = this.read === "No" ? "Yes" : "No";
  return this.read;
}

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
  document.body.classList.toggle("body-blocked-scrolling");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  processFormData();
  
  form.reset();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
  document.body.classList.remove("body-blocked-scrolling");
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

document.addEventListener("click", function(event) {
  const visibleTip = document.querySelector(".toggle-tip-span-visible");
  if (
    visibleTip &&
    !visibleTip.contains(event.target) &&
    !event.target.closest(".info-icon-btn-div") 
  ) {
    visibleTip.classList.remove("toggle-tip-span-visible");
  }
});

function displayBooks() {
  cardContainer.replaceChildren();

  myLibrary.forEach((book) => {
    console.log(book.title);
    
    // Card
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.setAttribute("data-book-ID", `${book.ID}`);
    
    // Card top icons
    const cardTopIconsDiv = document.createElement("div");
    cardTopIconsDiv.classList.add("card-top-icons");
    
    const bookIconSpan = document.createElement("span");
    bookIconSpan.classList.add("card-book-icon-span");

    const bookIcon = document.createElement("img");
    bookIcon.classList.add("book-icon");
    bookIcon.src = "images/book.svg";
    bookIcon.alt="A book";

    const rmBookBtn = document.createElement("button");
    rmBookBtn.classList.add("rm-book-btn");
    rmBookBtn.setAttribute("data-book-ID", `${book.ID}`);
    
    const rmBookIcon = document.createElement("img");
    rmBookIcon.classList.add("rm-book-icon");
    rmBookIcon.src = "images/remove-book.svg";
    rmBookIcon.alt = "Remove book";

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

    // Add info div
    const infoIconBtnDiv = document.createElement("div");
    infoIconBtnDiv.classList.add("info-icon-btn-div");

    const infoIconBtn = document.createElement("button");
    infoIconBtn.classList.add("info-icon-btn");

    const infoIcon = document.createElement("img");
    infoIcon.classList.add("info-icon");
    infoIcon.src = src="images/info.svg";
    infoIcon.alt = "Info icon";

    const toggleTipSpan = document.createElement("span");
    toggleTipSpan.classList.add("toggle-tip-span-hidden");
    toggleTipSpan.textContent = "Click the book icon below to mark as read or unread.";

    const bookStatusBtn = document.createElement("button");
    bookStatusBtn.classList.add("book-status-btn");

    const bookStatusIcon = document.createElement("img");
    bookStatusIcon.classList.add("book-status-icon");
    bookStatusIcon.src = "images/book-unread.svg";
    bookStatusIcon.alt = "Book unread";

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
    cardBottomBtnsDiv.appendChild(infoIconBtnDiv);

    infoIconBtnDiv.appendChild(infoIconBtn);
    infoIconBtn.appendChild(infoIcon);
   
    infoIconBtnDiv.appendChild(toggleTipSpan);
   
    cardBottomBtnsDiv.appendChild(bookStatusBtn);
    bookStatusBtn.appendChild(bookStatusIcon);

    infoIconBtnDiv.addEventListener("click", () => {
      toggleTipSpan.classList.toggle("toggle-tip-span-visible");
    });

    spanFillTitle.textContent = `${book.title}`;
    spanFillAuthor.textContent = `${book.author}`;
    spanFillPages.textContent = `${book.pages}`;
    spanFillID.textContent = `${book.ID}`;
    spanFillYear.textContent = `${book.year}`;
    spanFillRead.textContent = `${book.read}`;

    rmBookBtn.addEventListener("click", function(event) {
      const targetID = event.currentTarget.getAttribute("data-book-ID");
      myLibrary.splice(myLibrary.findIndex(book => book.ID === `${targetID}`), 1);
      displayBooks();
    });

    bookStatusBtn.addEventListener("click", function() {
      const currentReadStatus = book.toggleReadStatus();
      if (currentReadStatus === "Yes") {
        bookStatusIcon.src = "images/book-read.svg";
      } else {
        bookStatusIcon.src = "images/book-unread.svg";
      }
      console.log(currentReadStatus);
      spanFillRead.textContent = currentReadStatus;
    });
  });
}