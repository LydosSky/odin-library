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
];

function Book(author, title, pages, read, genre) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
}

function addBookToLibrary() {}

function displayLibrary() {
  for (const book of myLibrary) {
  }
}
