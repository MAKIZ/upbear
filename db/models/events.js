const db = require('../config');

const Event = {};

//find all events
Event.findAll = () => {
    return db.query('SELECT * FROM events');
};

//find a single event
Event.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM events
        WHERE id = $1
    `, [id]);
}

module.exports = Event;