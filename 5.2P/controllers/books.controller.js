const booksService = require('../services/books.service');

exports.getAllBooks = (req, res, next) => {
  try {
    const books = booksService.getAllBooks();
    res.status(200).json({ statusCode: 200, data: books, message: 'Books retrieved successfully' });
  } catch (err) {
    next(err);
  }
};

exports.getBookById = (req, res, next) => {
  try {
    const book = booksService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ statusCode: 404, message: 'Book not found' });
    res.status(200).json({ statusCode: 200, data: book, message: 'Book retrieved successfully' });
  } catch (err) {
    next(err);
  }
};