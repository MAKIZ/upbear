const express = require('express');
const userRoutes = express.Router();

const usersController = require('../controllers/users-controllers');
const authHelpers = require('../services/auth/auth-helpers');

userRoutes.get('/', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;