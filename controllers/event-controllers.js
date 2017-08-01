const Event = require('../db/models/events');

const eventController = {};

eventController.index = (req, res) => {
    Event.findAll().then(events => {
        res.render('events/event-index', {
            currentPage: 'index',
            message: 'ok',
            data: events,
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = eventController;