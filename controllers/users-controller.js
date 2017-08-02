const bcrypt = require('bcryptjs');
const User = require('../db/models/users');

const userController = {};

userController.create = (req, res) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  }).then(function(user){
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/user');
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

userController.index = (req, res) => {
  // console.log('userController');
  User.findUser(req.user.username)
    .then((users) => {
      res.render('users/user-index', {
        currentPage: 'index',
        message: 'ok',
        data: users,
      });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({err: err});
    });
}


module.exports = userController;
