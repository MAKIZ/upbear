const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const season = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
// put session here

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//index
app.get('/', (req, res) => {
  res.send('Welcome to my index page');
});


//error handler
app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});