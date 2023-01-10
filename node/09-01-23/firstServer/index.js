// creating server
//step 1. creating http

const http = require('http');

// step 2. creating server

const server = http.createServer((req, res) => {
  res.end('take it easy man ,we love man hfgfgbhvj n lkvhiuvi!');
});

server.listen(5000, () => {
  console.log('ohoho my first server is running on localhost:5000');
});
