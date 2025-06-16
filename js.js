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








