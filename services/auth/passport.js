const passport = require('passport');
const User = require('../../db/models/users');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findUser(username)
      .then(user => {
        process.env.CURRENT_USER=user.id;
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
