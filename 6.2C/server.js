const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

function add(a, b) {
  return a + b;
}


app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const sum = add(a, b);
  res.json({ operation: 'addition', a, b, result: sum });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = { app, add };