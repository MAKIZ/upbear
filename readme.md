# UpBear
A volunteer event app supporting the campaigns from dosomething.org

[screenshot coming soon]

#### Description
I was inspired by the work of dosomething.org for the youth and the community for every country. This app is just a tool in addition to promote the sites campaign where they can create an event and share it to there friends and supporters.

### List of Technoligies use
- HTML
- CSS
- Javascript
- Bootstrap
- Postgresql
- Node.js
- Express.js

### Code Snippet
The Database
```js
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);
```
The Model
```js

const db = require('../config');

const User = {};

User.findUser = (username) => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE username = $1
    `, [username]);
};

module.exports = User;
```
The View
```js
<% include ../partials/user-nav %>
<br> <br>

<div class="container">
  <div class="page-header">
      <h1>Welcome Back</h1>
  </div>

  <h3>Your Events</h3>

<div class="container">
<div class="row event-index-img">
    <% for (let event of data) { %>
    <div class="col-lg-6 centered">
      <img class="centered img-responsive margin-btm" src="/images/larm-rmah-216854.jpg">
    </div>

    <div class="col-lg-6">
        <h2><%= event.title %></h2>
        <h3><%= event.date %></h3>
        <h3><%= event.time %></h3>
        <h3><%= event.description %></h3>
        <div><a href='events/<%= event.id%>'>Show More</a></div>
        <br>
        
        <a class="btn btn-default btn-primary" href='events/<%= event.id %>/edit'>Edit this Event</a>

        <br> <br>

        <form method='POST' action='events/<%= event.id %>?_method=DELETE'>
        <button class="btn btn-danger btn-default btn-md">Delete this Event</button>
          </form>  
        </form>
      </div>
    <% } %>
</div>    
</div>
<% include ../partials/footer %>
```
The Controller
```js
const userController = {};

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
}
```
My Stretch Goals
- Update the User Experience
- Update the User Interface
- Join the Events table to the Guest table
