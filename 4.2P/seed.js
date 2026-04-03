const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
});
const Book = mongoose.model('Book', BookSchema);

mongoose.connect('mongodb://localhost:27017/BookDB');

mongoose.connect('mongodb://localhost:27017/BookDB').then(async () => {
  await Book.deleteMany({});
  console.log("Old data cleared!");

const book1 = new Book({
  title: "Book1",
  author: "Author 1",
  genre: "genre 1",
  description: "Description 1"
});
book1.save().then(() => console.log("Book 1 saved!"));

const book2 = new Book({
  title: "Book2",
  author: "Author2",
  genre: "Genre2",
  description: "Description2"
});
book2.save().then(() => console.log("Book 2 saved!"));

const book3 = new Book({
  title: "Book3",
  author: "Author3",
  genre: "genre3",
  description: "decsriprion 3"
});
book3.save().then(() => console.log("Book 3 saved!"));
});