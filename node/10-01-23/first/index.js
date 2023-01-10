// 1. importing http module from nodejs
const http = require('http');

// 2. creating server
const server = http.createServer((req, res) => {
  console.log(req.url);
  // statement : whenever req is post same time res must be  post
  if (req.url === '/posts') {
    res.end('hey here your posts');
  } else if (req.url === '/comments') {
    res.end('hey here your comments');
  } else if (req.url === '/students') {
    /* req student details*/
    const obj = {
      student_name: 'channa',
      roll_number: '21',
      class: '12th standard',
    };

    res.end(JSON.stringify(obj));
  } else {
    res.end('hello');
  }
});

server.listen(8080, () => {
  console.log('ohoh my first server is running on localhost:8080');
});
