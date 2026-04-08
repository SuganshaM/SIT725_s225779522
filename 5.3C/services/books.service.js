const Book = require('../models/books.model');

async function getAllBooks() {
  const books = await Book.find({}).lean();
  return books.map(book => ({
    ...book,
    price: book.price?.toString()
  }));
}

async function getBookById(id) {
  const book = await Book.findOne({ id }).lean();
  return book
    ? { ...book, price: book.price?.toString() }
    : null;
}

module.exports = { getAllBooks, getBookById };