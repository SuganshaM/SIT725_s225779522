var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/books', (req, res) => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Fiction",
      image: "/images/book1.jpg",          // ← your image filename here
      description: "A story of wealth, love, and the American Dream in the 1920s."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Drama",
      image: "/images/book2.jpg",          // ← your image filename here
      description: "A powerful story about racial injustice and moral growth."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      image: "/images/book3.jpg",          // ← your image filename here
      description: "A chilling depiction of a totalitarian society."
    }
  ];
  res.json(books);
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App listening on port: " + port);
});