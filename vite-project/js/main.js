import "../css/style.css";
import { DOMSelectors } from "./Dom";
import {books} from "./menu.js";




document.querySelector("#btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

DOMSelectors.card_form.addEventListener("click",(event) => {
  event.preventDefault()

})

/* function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');
  card.innerHTML = `
    <h2>${book.name}</h2>
    <p>${book.authorFirst} ${book.authorLast}</p>
    <p>Published: ${book.publishDate}</p>
    <p>Genres: ${book.genre}</p>
  `;
  return card;
}

function makeBookCards() {
  const app = document.getElementById('app');
  books.forEach(book => {
    const card = createBookCard(book);
    app.appendChild(card);
  });
}
 */


document.addEventListener('DOMContentLoaded', makeBookCards);

function Insert(arr){
  arr.forEach((book) => 
  document.querySelector.insertAdjacentHTML("afterbegin", `<div class="card">
  <h1 class="name">${book.name}</h1>
  <h2 class="authorFirst">${book.publishDate}</h2>
  <h2 class="authorLast">${book.genre}</h2>
  <img src="city" alt=""> 
  </div>`))}
