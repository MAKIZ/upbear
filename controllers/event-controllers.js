const Event = require('../db/models/events');

const eventController = {};

//find all events
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

//find single events
eventController.show = (req, res) => {
    Event.findById(req.params.id)
    .then(events => {
        res.render('events/event-single', {
            message: 'ok',
            data: events,
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = eventController;