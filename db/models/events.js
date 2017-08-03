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

//add an event
Event.create = event => {
    return db.one(`
        INSERT INTO events
        (title, date, time, location, description, organizer, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [event.title, event.date, event.time, event.location, event.description, event.organizer, event.user_id]);
}

module.exports = Event;