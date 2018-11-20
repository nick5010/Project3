const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
// const Data = require("./data");
// const router = express.Router();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// this is our MongoDB database
const dbRoute = "mongodb://<dbuser>:<dbpassword>@ds033907.mlab.com:33907/dummydb";

// This is our MongoDB Database
mongoose.connect(
  dbRoute,
  {useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only bade for logging and Body parser
// Bodyparser parses the request body to be a readable json format
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(logger("dev"));

// This is our get method
// It will grab all the avaliable data from our database
// router.get("/getData", (req, res) => {
//   Data.find((err, data) => {
//     if(err) return res.json({success: false, error: err });
//     return res.json({success: true, data: data})
//   })
// })

// this is our delete method
// router.delete("/deleteData", (req, res) => {
//   const {id} = req.body;
//   Data.findOneAndDelete(id, err => {
//     if(err) return res.send(err);
//     return res.json({success:true});
//   });
// });

// this is the create method, it will add new data into our database
// router.post("/putData", (req, res) => {
//   let data = new Data();
//   const {id, message} = req.body;

//   if ((!id && id !==0) || !message) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   data.message = message;
//   data.id = id;
//   data.save(err => {
//     if(err) return res.json({ success: false, error: err});
//     return res.json({success: true});
//   });
// });
