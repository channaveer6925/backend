const axios = require('axios');

const userModel = require('../models/user.model');

const router = require('express').Router();

// create
router.post('/user', async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// read
router.get('/getdata/:id', async (req, res) => {
  try {
    const get = await userModel.findById({ _id: req.params.id });
    return res.status(200).json({ message: 'reading your data' }, get);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

// delete

router.delete('/delete/:id', async (req, res) => {
  try {
    const rm = await userModel.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: 'your account is deleted' }, rm);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// edit
router.patch('/patch/:id', async (req, res) => {
  try {
    const edit = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json({ message: 'your acoount has been edited' });
  } catch (error) {
    return res.status(200).json(error.message);
  }
});

module.exports = router;
