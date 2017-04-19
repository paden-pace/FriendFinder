
var fs = require("fs");
var inquirer = require("inquirer");
var mysql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var homeRoute = function(app) {
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
};


var surveyRoute = function (req, res) {
  res.sendFile(path.join(__dirname, "./../public/survey.html"));
};

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "./../public/survey.html"));
// });


module.exports = homeRoute;