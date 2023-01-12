// step 1. importing express
const express = require('express');
const fs = require('fs');

// step2 creating app
const app = express(); /*its create only once in our app  */

app.use(express.json()); /*middleware*/

// step3 to start server on port 5050

app.get('/', (req, res) => {
  res.send('home page');
});

app.get('/comments', (req, res) => {
  res.send('comments');
});

//  post data
app.get('/posts', (req, res) => {
  fs.readFile('post.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      res.send('something went wrong');
    }
    res.send(data);
  });
});

// posting data from postman to server
// app.post('/posts', (req, res) => {
//   console.log(req.body);
//   res.send('okay we are posting');
// });

//  need post data in database file
app.post('/posts', (req, res) => {
  const datarecived = JSON.stringify(req.body);
  fs.writeFileSync('./database.txt', datarecived, { encoding: 'utf-8' });

  res.send('we are posting your data');
});

app.listen(5050, () => {
  console.log('server start on localhost 5050');
});
