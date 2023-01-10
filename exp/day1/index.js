const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/products', (req, res) => {
  res.send('products page');
});

app.listen(5050, () => {
  console.log('ohoh my expre3ss is running http://localhost:5050');
});
