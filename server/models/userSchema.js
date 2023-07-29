const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator'); // Add this line for email validation

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not a valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
});

userSchema.plugin(uniqueValidator);

const userDb = mongoose.model("users", userSchema);

module.exports = userDb;
