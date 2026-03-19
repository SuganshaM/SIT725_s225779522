const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add two numbers
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const sum = a + b;
  res.json({ operation: 'addition', a, b, result: sum });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});