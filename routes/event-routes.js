const express = require('express');
const eventRoutes = express.Router();

const eventController = require('../controllers/event-controllers');

eventRoutes.get('/', eventController.index);
eventRoutes.get('/:id', eventController.show);

module.exports = eventRoutes