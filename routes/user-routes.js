const express = require('express');
const userRoutes = express.Router();


const eventController = require('../routes/event-routes');

const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

//create a profile page
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

// userRoutes.delete('/events/:id', authHelpers.loginRequired,usersController.delete)

module.exports = userRoutes;