// Load books from API
const loadBooks = () => {
  fetch('/api/books')
    .then(res => res.json())
    .then(data => {
      $('#card-section').html(''); // clear before adding
      addCards(data);
    })
    .catch(err => console.error(err));
};

// Add cards dynamically
const addCards = (books) => {
  books.forEach(book => {
    let card = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${book.image}">
            <span class="card-title">${book.title}</span>
          </div>
          <div class="card-content">
            <p><b>Author:</b> ${book.author}</p>
            <p><b>Genre:</b> ${book.genre}</p>
            <p>${book.description}</p>
          </div>
        </div>
      </div>
    `;
    $('#card-section').append(card);
  });
};

// Handle form
const submitForm = () => {
  const book = {
    title: $('#book_title').val(),
    author: $('#book_author').val(),
    genre: $('#book_genre').val(),
    description: $('#book_description').val()
  };

  console.log("New Book:", book);

  M.toast({ html: `Book "${book.title}" added!`, classes: 'green' });
};

// Init
$(document).ready(() => {
  $('.modal').modal();

  loadBooks();

  $('#formSubmit').click(() => {
    submitForm();
  });
});

$('#clickBtn').click(() => {
  alert('Thanks for clicking!');
});