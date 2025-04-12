const dialog = document.getElementById("dialog");
const newBookBtn = document.querySelector(".new-book-btn");
const addBookBtn = document.querySelector(".add-book-btn");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});
