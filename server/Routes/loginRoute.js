const express = require('express');
const userDb = require('../models/userSchema');
const router = express.Router();
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
      const check = await userDb.findOne({ email: email });
      if (check) {
        res.json("exist");
      } else {
        res.json("not exist");
      }
    } catch (error) {
      res.status(500).json({ message: "An error occurred during login" });
      console.log(error);
    }
  });
  module.exports = router;