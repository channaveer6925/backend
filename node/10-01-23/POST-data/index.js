// importing module from node

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/posts') {
    fs.readFile('./data.txt', { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        res.end('somethimg went wrong');
      }
      return res.end(data);
    });
  } else {
    res.end('hello');
  }
});

server.listen(3000, () => {
  console.log('my server is statrted on locahhost:3000');
});
