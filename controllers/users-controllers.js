const bcrypt = require('bcryptjs');
const User = require('../db/models/users');

const usersController = {};

usersController.create = (req, res) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password_digest: hash,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }).then(user => {
      console.log(user);
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

usersController.index = (req, res) => {
  console.log('usersController');
  res.redirect('/events');
}

module.exports = usersController;