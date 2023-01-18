const userModel = require('../models/user.model');
const router = require('express').Router();

router.post('/signup', async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
