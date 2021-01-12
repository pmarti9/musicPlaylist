const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3002;
const app = express();
const mongojs = require('mongojs');
const mongoose = require('mongoose');
const databaseurl = 'musicdb'
const collections = 'users'
const db = mongojs(databaseurl,collections);
db.on("error", error => {
  console.log("Database Error:", error)
})
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/musicdb", {
  useNewUrlParser: true });
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
