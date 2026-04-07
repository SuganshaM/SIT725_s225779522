const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Mount books routes
const booksRoute = require('./routes/books.routes');
app.use('/api/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});