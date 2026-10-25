// Student Name: Schira, Kendra
// Student ID: 1233270677
// IFT 458: MModule 2 Lab 1
// Due Date: 09/13/2026

const express = require('express');
const app = express();
const port = 4001;
const loggerMiddleware = require('./loggerMiddleware');

app.use(loggerMiddleware);

app.set('view engine', 'ejs');

//Form Submission
app.use(express.urlencoded({ extended: true}));

//Routing Table
app.get('/', (req, res) => {
    res.render('form'); 
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

