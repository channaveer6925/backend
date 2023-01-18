const express = require('express');
const dns = require('dns');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Home page');
});

app.post('/ipaddress', (req, res) => {
  const { web_address } = req.body;
  dns.lookup(web_address, (err, address) => {
    if (err) {
      res.send('somethimg went wrong');
    }
    res.send(address);
  });
});
app.listen(5050, () => {
  console.log('listening on 5050');
});
