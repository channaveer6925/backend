// step 6 usermodel creating here...
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
