const Joiner = require ('../db/models/joiners.js');

const joinerController = {};

joinerController.create = (req, res) => {
    Joiner.create ({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        events_id: process.env.CURRENT_EVENTS,
    }).then(() => {
        res.redirect('events')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = joinerController;