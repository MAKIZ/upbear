const express = require('express');
const userRoutes = express.Router();

const eventRoutes = require('../routes/event-routes');

const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');

//create a profile page
userRoutes.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;