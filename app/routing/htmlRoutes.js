
var fs = require("fs");
var inquirer = require("inquirer");
var mysql = require('mysql');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var htmlRoutes = function (app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
};


module.exports = htmlRoutes;