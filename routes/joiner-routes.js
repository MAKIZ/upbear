const express = require('express');
const joinerRoutes = express.Router();

const joinerController = require('../controllers/joiners-controller.js');

//add joiner 
joinerRoutes.post('/', joinerController.create);

joinerRoutes.get('/add', (req, res) => {
    console.log('joiners');
    res.render('joiners/joiner-add', {
        currentPage: 'add',
    });
});

module.exports = joinerRoutes;