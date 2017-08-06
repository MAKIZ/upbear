const db = require('../config');

const Joiner = {};

Joiner.create = (join) => {
    return db.manyOrNone (`
        INSERT INTO joiners
        (firstname, lastname, email, user_id, events_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [join.firstname, join.lastname, join.email, join.user_id, join.events_id]);
};

module.exports = Joiner;