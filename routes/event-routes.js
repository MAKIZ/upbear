const express = require('express');
const eventRoutes = express.Router();

const authHelpers = require('../services/auth/auth-helpers')
const eventController = require('../controllers/event-controllers');

eventRoutes.get('/', eventController.index);
eventRoutes.post('/', eventController.create);

eventRoutes.get('/add', (req, res) => {
    res.render('events/event-add', {
        currentPage: 'add',
    });
});

eventRoutes.get('/:id', eventController.show);
eventRoutes.get('/:id/edit', authHelpers.loginRequired,eventController.edit);
eventRoutes.put('/:id', authHelpers.loginRequired,eventController.update);
eventRoutes.delete('/:id', authHelpers.loginRequired,eventController.delete)
module.exports = eventRoutes
