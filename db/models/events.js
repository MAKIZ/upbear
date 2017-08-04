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
        (title, events_date, events_time, events_location, events_description, organizer, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
    `, [event.title, event.events_date, event.events_time, event.events_location, event.events_description, event.organizer, event.user_id]);
}

//edit event
Event.update = (event, id) => {
    return db.one (`
        UPDATE events SET
        title = $1,
        events_date = $2,
        events_time = $3,
        events_location = $4,
        events_description = $5,
        organizer = $6,
    `, [event.title, event.events_date, event.events_time, event.events_location, event.events_description, event.organizer, id])
}

//delete event
Event.destroy = (id) => {
    return db.one(`
        DELETE FROM events
        WHERE id = $1
    `, [id])
}

module.exports = Event;