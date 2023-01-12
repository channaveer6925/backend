const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.json()); /*middleware */

app.get('/countries_data', (req, res) => {
  //1. reading db.json file and storing it into variable and sending res to client
  const result = fs.readFileSync('./db.json', 'utf-8');
  //2.converting db.json into obj
  const data = JSON.parse(result);
  const { countries } = data;
  //    sending res
  res.send(countries);
});

//  posting data to db.json
app.post('/post_data', (req, res) => {
  // 1. get data from client
  const log = req.body;
  // 2. store data into db.json
  //   1.get all present Data
  const prev_data = fs.readFileSync('./db.json', 'utf-8');
  const parsed_prev_data = JSON.parse(prev_data);
  const attendance = parsed_prev_data.countries;
//   console.log('countries1:', countries1);

  //   2.then add recieved data to it
  attendance.push(log);
  const latest_data = JSON.stringify(parsed_prev_data);

  //   finally store it into db.json
  fs.writeFileSync('./db.json', latest_data, 'utf-8');

  res.send(log);
});

app.listen(5050, () => {
  console.log('hey my localhost is running on 5050');
});
