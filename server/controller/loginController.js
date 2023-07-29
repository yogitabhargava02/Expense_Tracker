const userDb = require('../models/userSchema');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if a user with the given email exists in the database
    const check = await userDb.findOne({ email: email });
    
    // If the user exists, send "exist" as a response
    // Otherwise, send "not exist" as a response
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (error) {
    // Handle errors and send an error response if needed
    res.status(500).json({ message: "An error occurred during login" });
    console.log(error);
  }
};

module.exports = loginController;
