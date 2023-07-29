const express = require('express');
const cors = require('cors');
const app = express();



const createRoutes = require('./Routes/createRoutes');
const loginRoutes = require('./Routes/loginRoute');
const registerRoutes = require('./Routes/registerRoute');
const viewData=require('./Routes/viewData');
const EditExpense= require('./Routes/editExpense');
const DeleteExpense=require('./Routes/deleteRoute');
require("./db/conn");

// Middleware
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(req.body);
  next();
});

app.use('/register', registerRoutes);

app.use('/create', createRoutes);
app.use('/', loginRoutes);
app.use('/',viewData);
app.use('/expenses',EditExpense);
app.use('/expenses', DeleteExpense); 
app.get('/', (req, res) => {
  res.send('Hello, this is the root page!');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});