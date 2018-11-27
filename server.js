require("dotenv").config();

const express = require("express");
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
const jwt = require('jsonwebtoken');

const db = require("./models");
const passport = require("./utils/passport");

const app = express();
app.set('port', process.env.PORT || 3001)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.post("/login", (req, res) => {
  const { userName, password } = req.body;

  db.User.findOne({ where: { userName } })
    .then(user => {
      if (!user)
        return res.status(401).json({ success: false, msg: 'Authentication failed.' })

      if (password === user.password) {
        const token = jwt.sign(user.toJSON(), process.env.CHAT_JWT_SECRET);
        res.json({ success: true, token: 'JWT ' + token });
      } else {
        res.status(401).send({ success: false, msg: 'Authentication failed.' });
      }
    })
    .catch(err => console.log(err));
});

// app.post('/signUp', (req, res) => {
//   connection.query('INSERT INTO User Set ?', req.body,
//     function (err, result) {
//       if (err) throw err;
//       res.send('User added to database with id: ' + result.insertId)
//     })
// })



// API Routes
app.get("/api/message", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: "Hello world" });
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false })
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log(`🌎 ==> Server now on port ${app.get('port')}!`);
    });
  })
  .catch(err => console.log(err));
