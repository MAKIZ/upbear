const User = require ('../db/models/users');
const Event = require ('../db/models/events');
const Joiner = require ('../db/models/joiners');

const joinerController = {};

//find all events join by user
joinerController.index = (req, res) => {
    Joiner.findAll().then(events => {
        res.render('join/register', {
            currentPage: 'index',
            message: 'ok',
            data: events,
        });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

joinerController.create = (req, res) => {
    Joiner.create ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        user_id: req.user.id,
        events_id: req.params.id
    }).then(() => {
        res.redirect('user')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

module.exports = joinerController;