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
  displayLibrary();
  form.reset();
}

function displayLibrary() {
  const cardsContainer = document.querySelector(".cards-container");
  for (const book of myLibrary) {
    const card = createBookMarker(
      book.author.toLowerCase(),
      book.title.toLowerCase(),
      book.pages,
      !!book.read,
      book.genre.toLowerCase(),
    );

    // ??? lots of question marks
    cardsContainer.innerHTML += card;
  }
}

function createBookMarker(author, title, pages, read, genre) {
  return `<div class="card ${read ? "border-green" : "border-red"}">
            <h2>${title}</h4>
            <h4>${author}</h4>
            <h4>${pages} pages</h4>
            <h4>${genre}</h4>
          </div>`;
}

function main() {
  displayLibrary();
}

main();
