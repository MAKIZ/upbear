const express = require('express');
const eventRoutes = express.Router();

const eventController = require('../controllers/event-controllers');

eventRoutes.get('/', eventController.index);
eventRoutes.post('/', eventController.create);

eventRoutes.get('/add', (req, res) => {
    res.render('events/event-add', {
        currentPage: 'add',
    });
});

eventRoutes.get('/:id', eventController.show);

module.exports = eventRoutes