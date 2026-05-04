var socket = io();

socket.on('weather', function(data) {
  document.getElementById('condition').innerText   = data.condition;
  document.getElementById('temperature').innerText = data.temperature;
  document.getElementById('humidity').innerText    = data.humidity;
  document.getElementById('windSpeed').innerText   = data.windSpeed;
  document.getElementById('pressure').innerText    = data.pressure;
  document.getElementById('uvIndex').innerText     = data.uvIndex;
  document.getElementById('time').innerText        = data.time;
});