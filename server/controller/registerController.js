const userDb = require('../models/userSchema');

const registerUser = async (req, res) => {
  const { email, password, cpassword } = req.body;
  const data = {
    email: email,
    password: password,
    cpassword: cpassword
  };
  try {
    // Check if a user with the given email exists in the database
    const check = await userDb.findOne({ email: email });
    
    // If the user exists, send "exist" as a response
    // Otherwise, insert the new user into the database and send "not exist" as a response
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await userDb.insertMany([data]);
    }
  } catch (error) {
    // Handle errors and send an error response if needed
    res.status(500).json({ message: "An error occurred during registration" });
    console.log(error);
  }
};

module.exports = registerUser;
