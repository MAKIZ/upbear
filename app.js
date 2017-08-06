const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// initialize express
const app = express();
require('dotenv').config();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//static files
app.use(express.static('public'));

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//index
app.get('/', (req, res) => {
  res.render('index', {
      message: 'You are inside the root index-page',
      documentTitle: 'upbear app',
      subTitle: 'a volunteer event app'
  });
});

//event route
const eventRoutes = require('./routes/event-routes');
app.use('/events', eventRoutes);

//joiner route
const joinerRoutes = require('./routes/joiner-routes');
app.use('/joiner', joinerRoutes);

//auth route
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

//user route
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

//error handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Not found!',
  });
});