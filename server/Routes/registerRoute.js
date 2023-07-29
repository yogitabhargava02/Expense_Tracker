// const express = require('express');
// const userDb = require('../models/userSchema');
// const router = express.Router();

// const cors = require('cors');
// const app = express();
// app.use(cors());
// app.post("/register", async (req, res) => {
//     const { email, password, cpassword } = req.body;
//     const data = {
//       email: email,
//       password: password,
//       cpassword: cpassword
//     };
//     try {
//       const check = await userDb.findOne({ email: email });
//       if (check) {
//         res.json("exist");
//       } 
//       else {
//         res.json("not exist");
//           await userDb.insertMany([data]);
         
//         }
//       }
//      catch (error) {
//       res.status(500).json({ message: "An error occurred during registration" });
//       console.log(error);
//     }
//   });

//   module.exports = router;
const express = require('express');
const userDb = require('../models/userSchema');
const router = express.Router();

router.post("/", async (req, res) => { // Update the route to '/'
  const { email, password, cpassword } = req.body;
  const data = {
    email: email,
    password: password,
    cpassword: cpassword
  };
  try {
    const check = await userDb.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await userDb.insertMany([data]);
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration" });
    console.log(error);
  }
});

module.exports = router;
