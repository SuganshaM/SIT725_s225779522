const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

function getWeatherData() {
  return {
    temperature: (15 + Math.random() * 20).toFixed(1),
    humidity:    (40 + Math.random() * 50).toFixed(1),
    windSpeed:   (5  + Math.random() * 60).toFixed(1),
    pressure:    (990 + Math.random() * 40).toFixed(1),
    uvIndex:     Math.floor(Math.random() * 11),
    condition:   randomCondition(),
    time:        new Date().toLocaleTimeString(),
  };
}

function randomCondition() {
  const conditions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy', 'Windy', 'Stormy', 'Clear'];
  return conditions[Math.floor(Math.random() * conditions.length)];
}

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('weather', getWeatherData());

  setInterval(() => {
    socket.emit('weather', getWeatherData());
  }, 2000);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});