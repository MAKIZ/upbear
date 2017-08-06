const express = require('express');
const joinerRoutes = express.Router();

const authHelpers = require('../services/auth/auth-helpers');

const joinerController = require('../controllers/joiners-controller.js');

joinerRoutes.get('/', joinerController.index);

//add joiner 
joinerRoutes.post('/', joinerController.create);

joinerRoutes.get('/register', (req, res) => {
    res.render('joiners/joiner-add', {
        currentPage: 'register',
    });
});

module.exports = joinerRoutes;