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






document.addEventListener('DOMContentLoaded', makeBookCards);

function Insert(arr){
  arr.forEach((book) => 
  document.querySelector.insertAdjacentHTML("afterbegin", `<div class="card">
  <h1 class="name">${book.name}</h1>
  <h2 class="authorFirst">${book.publishDate}</h2>
  <h2 class="authorLast">${book.genre}</h2>
  <img src="city" alt=""> 
  </div>`))}

  Insert(books)

  const main = books.filter((books) => books.genre === "")
