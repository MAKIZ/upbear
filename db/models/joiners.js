const db = require('../config');

const Joiner = {};

//join an event
Joiner.create = (joiner) => {
    return db.one(`
        INSERT INTO joiners
        (email, firstname, lastname, phone, events_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [joiners.email, joiners.firstname, joiners.lastname, joiners.phone, joiners.events.id]);
}

module.exports = Joiner;