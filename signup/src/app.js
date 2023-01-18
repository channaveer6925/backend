const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const { default: mongoose } = require('mongoose');
// middleware
app.use(express.json());

// importing controller
const userController = require("./controllers/user.controllers")


// route
app.get('/', (req, res) => {
  return res.status(200).json('welcome to database api');
});

app.use("/auth",userController)

// connecting to mongodb database
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`listening on ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
