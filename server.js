
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

var members = [
    {
        name: 'Bob',
        photo: 'https://pbs.twimg.com/profile_images/529302318781448194/dUrCajPx.jpeg',
        answers: [ '5', '5', '5', '5', '5', '5', '5', '5', '5', '5' ]
    },{
        name: 'John',
        photo: 'http://www.franchise.org/sites/default/files/Papa-John-Pepp_0.png',
        answers: [ '5', '5', '5', '5', '5', '1', '1', '1', '1', '1' ]
    },{
        name: 'Jimmy',
        photo: 'http://www.success.com/sites/default/files/main/articles/Jimmy-John-Liautaud_0.jpg',
        answers: [ '4', '3', '1', '1', '4', '1', '1', '1', '3', '1' ]
    },{
        name: 'Ronald',
        photo: 'http://adq631j7v3x1shge52cot6m1.wpengine.netdna-cdn.com/wp-content/uploads/2011/08/Ronald-McDonald.jpg',
        answers: [ '4', '3', '3', '1', '4', '5', '1', '2', '3', '1' ]
    },{
        name: 'The King',
        photo: 'http://i.usatoday.net/money/_photos/2011/08/18/Burger-King-freshens-fast-food-image-0AA9GQN-x-large.jpg',
        answers: [ '1', '1', '2', '3', '4', '4', '5', '1', '1', '5' ]
    },{
        name: 'Wendy',
        photo: 'https://qzprod.files.wordpress.com/2013/07/wendy.jpg?quality=80&strip=all&w=600&h=434',
        answers: [ '2', '1', '5', '1', '4', '5', '3', '1', '4', '5' ]
    },{
        name: 'Colonol Sanders',
        photo: 'http://static6.uk.businessinsider.com/image/558c6912dd0895850a8b4671-480/col-sanders.jpg',
        answers: [ '5', '1', '1', '2', '4', '2', '5', '2', '3', '1' ]
    }
];

// app.get("./routing/htmlRoutes.js", homeRoute(req, res));
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });


app.get("/api", function(req, res) {
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
    console.log(newMember);

    // var newMemberArray = newMember.answers;
    // var least = 0;
    // for (i=0; i<members.length; i++){
    //     var results = 0;
    //     var leastResults = 40;
    //         for (k=0; k<members[i].answers.length; k++){
    //             var check = parseInt(members[i].answers) - parseInt(newMember.answers[k]);
    //             console.log(check);
    //             if (check > 0){
    //                 results = results + check;
    //             } else if (check < 0){
    //                 results = results - check;
    //             };
    //         };
    //     console.log("Member "+ i + " has a result of " + results);
    //     if (results < 40){
    //         if (results < leastResults){
    //             least = i;
    //         }
    //     } 
    //     console.log ("least: " + least);
    // };
    //return res.json(members[least]);
    // $("#bestFriendDiv").append("<h2> Friend Name: " + members[least].name + "</h2>");
    // $("#bestFriendDiv").append("<h2> Friend Picture: " + members[least].photo + "</h2>");
// compare answer, add to total number, then use total number to find the smallest, that is the one

  // We then add the json the user sent to the member array
    members.push(newMember);
  // We then display the JSON to the users
    res.json(newMember);
});







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});