
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


// app.get("./routing/htmlRoutes.js", homeRoute(req, res));

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
    });

// app.get("/:option/:value1/:value2", function(req, res) {
 
//     var operator = req.params.option;
//     var val1 = parseInt(req.params.value1);
//     var val2 = parseInt(req.params.value2);
//     console.log("operator");

//     if (operator == "add"){
//         console.log("answer");
//         var answer = (val1 + val2);
//         console.log(answer);
//     } else if (operator == "subtract"){
//         var answer = (val1 - val2);
//         console.log(answer);
//     }else if (operator == "multiply"){
//         var answer = (val1 * val2);
//         console.log(answer);
//     }else if (operator == "divide"){
//         var answer = (val1 / val2);
//         console.log(answer);
//     };

//     res.send("helloo?");

// });





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});