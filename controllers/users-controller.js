const bcrypt = require('bcryptjs');
const User = require('../db/models/users');
const Event = require('../db/models/events');


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
  User.findEventsByUser(req.user.id)
    .then((events) => {
      res.render('users/user-index', {
        currentPage: 'index',
        message: 'ok',
        data: events,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}

//delete event
// userController.delete = (req, res) => {
//     User.destroy(req.params.id)
//     .then(() => {
//         res.redirect('users/user-index');
//     }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }

module.exports = userController;
