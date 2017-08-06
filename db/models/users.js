const db = require('../config');

const User = {};

User.findUser = (username) => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE username = $1
    `, [username]);
};

User.create = (user) => {
    return db.one(`
        INSERT INTO users
        (username, password_digest, email, firstname, lastname)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [user.username, user.password_digest, user.email, user.firstname, user.lastname]);
};

//add event by user
User.findEventsByUser = id => {
    console.log('events');
    return db.manyOrNone(`
        SELECT * FROM events
        WHERE user_id = $1
    `, [id])
}


module.exports = User;