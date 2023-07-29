// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 8000;


// const createRoutes = require('./Routes/createRoutes');
// const loginRoutes = require('./Routes/loginRoute');
// const registerRoutes = require('./Routes/registerRoute');
// const viewData=require('./Routes/viewData');
// const EditExpense= require('./Routes/editExpense');
// const DeleteExpense=require('./Routes/deleteRoute');
// require("./db/conn");

// // Middleware
// app.use(express.json());
// app.use(cors());


// app.use((req, res, next) => {
//   console.log(req.body);
//   next();
// });

// app.use('/register', registerRoutes);

// app.use('/create', createRoutes);
// app.use('/', loginRoutes);
// app.use('/',viewData);
// app.use('/expenses',EditExpense);
// app.use('/expenses', DeleteExpense); 
// app.get('/', (req, res) => {
//   res.send('Hello, this is the root page!');
// });

// app.listen(PORT, () => {
//   console.log('Server is running on port `${PORT}`');
// });




const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

// Require the necessary routes
const createRoutes = require('./Routes/createExpense');
const deleteRoutes = require('./Routes/deleteExpense');
const loginRoutes = require('./Routes/loginRoute');
const registerRoutes = require('./Routes/registerRoute');
const viewData = require('./Routes/viewExpense');
const editExpense = require('./Routes/editExpense');


require("./db/conn");

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// Applying routes and linking them to respective controllers
app.use('/register', registerRoutes);
app.use('/create', createRoutes);
app.use('/expenses', deleteRoutes);
app.use('/', loginRoutes);
app.use('/', viewData);
app.use('/expenses', editExpense);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is the root page!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
