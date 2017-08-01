const db = require('../config');

const Event = {};

//find all events
Event.findAll = () => {
    return db.query('SELECT * FROM events');
};

module.exports = Event;