const express = require('express');

const app = express();
const fs = require('fs');

// 1. printing route or endprint
// const printingendPoint = (req, res, next) => {
//   console.log(req.url);
//   next();
// };
// app.use(printingendPoint);

// 2. to findout timetaken between req and res
const logger = (req, res, next) => {
  const st = new Date().getTime();
  next();
  const et = new Date().getTime();
  console.log(req.url, et - st + ' milisec');
};

// 3. to admin auth
const checkadmin = (req, res, next) => {
  const { user } = req.query;
  console.log('user:', user);

  if (user === 'admin') {
    next();
  } else {
    console.log("your not autherised ");
    res.send('your not authrised person');
  }
};

app.get('/', (req, res) => {
  res.send('home page');
});

app.use(logger ,checkadmin);

app.get('/About', (req, res) => {
  const text = fs.readFileSync('./About.txt', 'utf-8');
  res.send(text);
});

app.listen(5050, () => {
  console.log('hey localhost is working on 5050');
});
