import "../css/style.css";
import { DOMSelectors } from "./Dom";
import {books} from "./menu.js";


/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */

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

function createBookCard(book) {
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

document.addEventListener('DOMContentLoaded', makeBookCards);
