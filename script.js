const myLibrary = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    pages: 309,
    read: true,
    genre: "Fantasy",
  },
  {
    author: "George Orwell",
    title: "1984",
    pages: 328,
    read: true,
    genre: "Dystopian",
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: 310,
    read: false,
    genre: "Fantasy",
  },

  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    pages: 281,
    read: true,
    genre: "Classic",
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",

    pages: 180,
    read: true,
    genre: "Classic",
  },
  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    pages: 279,
    read: false,
    genre: "Romance",
  },
  {
    author: "Ray Bradbury",
    title: "Fahrenheit 451",
    pages: 158,
    read: true,

    genre: "Dystopian",
  },
  {
    author: "Mary Shelley",
    title: "Frankenstein",
    pages: 280,
    read: false,
    genre: "Horror",
  },
  {
    author: "Markus Zusak",
    title: "The Book Thief",

    pages: 552,
    read: true,
    genre: "Historical Fiction",
  },
  {
    author: "Herman Melville",
    title: "Moby-Dick",
    pages: 635,

    read: false,
    genre: "Adventure",
  },

  {
    author: "Leo Tolstoy",
    title: "War and Peace",
    pages: 1225,
    read: false,
    genre: "Historical Fiction",
  },
  {
    author: "Gabriel García Márquez",
    title: "One Hundred Years of Solitude",
    pages: 417,
    read: true,
    genre: "Magical Realism",
  },
  {
    author: "Charles Dickens",
    title: "Great Expectations",
    pages: 505,
    read: false,
    genre: "Classic",
  },
  {
    author: "Ernest Hemingway",
    title: "The Old Man and the Sea",
    pages: 132,
    read: true,
    genre: "Fiction",
  },
  {
    author: "Margaret Atwood",
    title: "The Handmaid's Tale",
    pages: 311,
    read: true,
    genre: "Dystopian",
  },
  {
    author: "H.G. Wells",
    title: "The War of the Worlds",
    pages: 192,
    read: true,
    genre: "Science Fiction",
  },
  {
    author: "Khaled Hosseini",
    title: "The Kite Runner",
    pages: 372,
    read: false,
    genre: "Historical Fiction",
  },
  {
    author: "Douglas Adams",
    title: "The Hitchhiker's Guide to the Galaxy",
    pages: 224,
    read: true,
    genre: "Science Fiction",
  },
  {
    author: "George R.R. Martin",
    title: "A Game of Thrones",
    pages: 694,
    read: false,
    genre: "Fantasy",
  },
  {
    author: "Agatha Christie",
    title: "Murder on the Orient Express",
    pages: 256,
    read: true,
    genre: "Mystery",
  },
];

const form = document.querySelector("#input-form");
const cardsContainer = document.querySelector(".cards-container");
form.addEventListener("submit", addBookToLibrary);

function Book(author, title, pages, read, genre) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  const genre = document.querySelector("#genre");

  const book = new Book(
    author.value,
    title.value,
    pages.value,
    read.value,
    genre.value,
  );

  myLibrary.push(book);
  form.reset();
  displayLibrary();
}

function displayLibrary() {
  cardsContainer.textContent = "";
  for (let idx = 0; idx < myLibrary.length; idx++) {
    if (myLibrary[idx] === undefined) continue;
    const card = createBookMarker(
      idx,
      myLibrary[idx].author.toLowerCase(),
      myLibrary[idx].title.toLowerCase(),
      myLibrary[idx].pages,
      !!myLibrary[idx].read,
      myLibrary[idx].genre.toLowerCase(),
    );

    // ??? lots of question marks
    cardsContainer.appendChild(card);
  }
}

function createBookMarker(index, author, title, pages, read, genre) {
  const card = document.createElement("div");
  card.classList.add(`${read ? "border-green" : "border-red"}`);
  card.classList.add("card");
  card.setAttribute("index", index);
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.id = "delete-button";

  const titleEl = document.createElement("h2");
  const authorEl = document.createElement("h4");
  const pagesEl = document.createElement("h4");
  const genreEl = document.createElement("h4");

  titleEl.innerText = title;
  authorEl.innerText = author;
  pagesEl.innerText = `${pages} pages`;
  genreEl.innerText = genre;

  card.appendChild(deleteButton);
  card.appendChild(titleEl);
  card.appendChild(authorEl);
  card.appendChild(pagesEl);
  card.appendChild(genreEl);

  return card;
}

function deleteBook(event) {
  const index = event.target.parentElement.getAttribute("index");
  myLibrary[index] = undefined;
  cardsContainer.removeChild(event.target.parentElement);
}

function main() {
  displayLibrary();
  const deleteButton = document.querySelectorAll("#delete-button");
  for (let button of deleteButton) {
    button.addEventListener("click", deleteBook);
  }
}

main();
