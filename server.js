
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs")

var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');
var friendsJS = require('./app/data/friends');

require("./app/routing/htmlRoutes");



// creates an express app
var app = express();

var PORT = process.env.PORT || 7001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var members = [];

// app.get("./routing/htmlRoutes.js", homeRoute(req, res));
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });


app.get("/api/:members?", function(req, res) {
  var chosen = req.params.members;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < members.length; i++) {
      if (chosen === members[i].routeName) {
        return res.json(members[i]);
      }
    }
    return res.json(false);
  }
  return res.json(members);
});


    // Create New Reservation - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
    var newMember = req.body;
    newMember.routeName = newMember.name.replace(/\s+/g, "").toLowerCase();
    console.log(newMember);
  // We then add the json the user sent to the member array
    members.push(newMember);
    newMember.conirmation = 'confirm member';
  // We then display the JSON to the users
    res.json(newMember);
});







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});