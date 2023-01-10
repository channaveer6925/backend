// creating http request
const http = require('http');

// creating server here....
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to home Page');
  }
  if (req.url === '/product') {
    res.end('welcome to Product Page');
  }

  //   res.write('hello');
  //   res.write('world');

  res.end('hello world and long time!'); /* ending server here....*/
});

// to start server

// server.listen(port,(cb)=>{
//     console.log("local hosted started on 8080");
// })
server.listen(8080, () => {
  console.log('server started on localhost 8080');
});
