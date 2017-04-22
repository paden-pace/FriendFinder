
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs")

var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require('./app/routing/apiRoutes');
var friendsJS = require('./app/data/friends');




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



htmlRoutes(app);



// //apiRoutes(app);
// app.get("/api/friends", function(req, res) {
//   var chosen = req.params.members;
//   if (chosen) {
//     console.log(chosen);
//     for (var i = 0; i < members.length; i++) {
//       if (chosen === members[i].routeName) {
//         return res.json(members[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(members);
// });


// membersFunc(app);
apiRoutes(app);
// module.exports = membersFunc;





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});