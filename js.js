// To delete a book
const bookSection = document.querySelector('.book-section');
bookSection.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const book = event.target.closest('.book');
    bookSection.removeChild(book)}});

// To open dialog box
const openButton = document.querySelector('.new-book');
const modal = document.querySelector(".modal");
openButton.addEventListener("click",()=>{
    modal.style.display = "flex"; 
});

// To close dialog box
const closeButton = document.querySelector('.close')
closeButton.addEventListener("click",()=>{
    modal.style.display = "none"; 
});

form = document.querySelector('#newBookForm')
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.querySelector("#bookTitle").value;
  const author = document.querySelector("#bookAuthor").value;
  const image = document.querySelector("#bookImage").value;
  const divBook = document.createElement("div");
  divBook.classList.add("book");
  const divImage = document.createElement('div');
  divImage.classList.add("image");
  const imageUrl = document.createElement("img");
  imageUrl.src = image ;
  divImage.append(imageUrl);
  divBook.append(divImage);
  const pAuthor = document.createElement('p');
  pAuthor.textContent = author ;
  const pTitle = document.createElement('p');
  pTitle.textContent = title ;
  divBook.append(pTitle);
  divBook.append(pAuthor);
  const divButton = document.createElement('div');
  divButton.classList.add('button');
  const input = document.createElement('input');
  input.classList.add('Completed');
  input.type = 'checkbox';
  divButton.append(input);
  const pCompleted = document.createElement('p');
  pCompleted.textContent = 'Completed' ;
  const delButton = document.createElement('button');
  delButton.classList.add('delete');
  delButton.textContent = 'delete';
  divButton.append(pCompleted);
  divButton.append(delButton);
  divBook.append(divButton);
  bookSection.append(divBook);
  form.reset();
  modal.style.display = "none";
});







