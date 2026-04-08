const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/booksdb');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const booksRoute = require('./routes/books.routes');
app.use('/api/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});