const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hey i am here......');
});

app.post('/posts', (req, res) => {
  const data = JSON.stringify(req.body);
  fs.writeFile('./database.txt', data, (err, data) => {
    console.log(req.body);
  });

  res.send('hey i am posting data');
});

// getting data from database file

app.get('/getdata', (req, res) => {
  const data = fs.readFileSync('./database.txt', { encoding: 'utf-8' });
  res.send(data);
});

app.listen(3000, () => {
  console.log('hey my localhost is running on 3000');
});
