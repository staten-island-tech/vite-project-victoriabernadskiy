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

let current_arr = "books"

function Insert(arr) {
  arr.forEach((book) => {
    DOMSelectors.card_holder.insertAdjacentHTML('afterbegin', 
    `  <div class="card">
    <h1 class="name">${book.name}</h1>
    <h2 class="author">${book.authorFirst} ${book.authorLast}</h2>
    <h2 class="publishDate">${book.publishDate}</h2>
    <h2 class="genre">${book.genre}</h2>
    <img src="${book.image}" alt="" class="card-img">
  </div>`)});
}

const deleteBooks = function() {
  DOMSelectors.card_holder.innerHTML = ''
}

Insert(books)


const mystery = books.filter((books) => books.genre.includes("mystery"))
const historical = books.filter((books) => books.genre.includes("historical"))
const stupid = books.map((book) => ({
  ...book,
  name: `Stupid ${book.name}`
}))
const dystopian = books.filter((books) => books.genre.includes("dystopian"))
const fantasy = books.filter((books) => books.genre.includes("fantasy"))

DOMSelectors.mysbtn.addEventListener("click", function(){
  if (current_arr === "mystery") {
    deleteBooks()
    Insert(books)
    current_arr = "books"
  } else {
    current_arr = "mystery"
    deleteBooks()
    Insert(mystery)
  }  
})

DOMSelectors.hisbtn.addEventListener("click", function(){
  if (current_arr === "historical") {
    deleteBooks()
    Insert(books)
    current_arr = "books"
  } else {
    current_arr = "historical"
    deleteBooks()
    Insert(historical)
  }  
})

DOMSelectors.stupidbtn.addEventListener("click", function(){
  if (current_arr === "stupid") {
    deleteBooks()
    Insert(books)
    current_arr = "books"
  } else {
    current_arr = "stupid"
    deleteBooks()
    Insert(stupid)
  }  
})

DOMSelectors.dysbtn.addEventListener("click", function(){
  if (current_arr === "dystopian") {
    deleteBooks()
    Insert(books)
    current_arr = "books"
  } else {
    current_arr = "dystopian"
    deleteBooks()
    Insert(dystopian)
  }  
})

DOMSelectors.fanbtn.addEventListener("click", function(){
  if (current_arr === "fantasy") {
    deleteBooks()
    Insert(books)
    current_arr = "books"
  } else {
    current_arr = "fantasy"
    deleteBooks()
    Insert(fantasy)
  }  
})

