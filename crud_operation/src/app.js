const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

// importing controller

const userController = require('../src/controllers/user.controllers');

app.use(userController);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
