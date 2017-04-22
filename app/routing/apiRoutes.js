
var members = require('./../data/friends');


var apiRoutes = function(app){
    app.get("/api/friends", function(req, res) {
        return res.json(members);
    });

    // Create New Member - takes in JSON input
    app.post("/api/new", function(req, res) {
        var newMember = req.body;
        members.push(newMember);
        res.json(newMember);
    });
};






module.exports = apiRoutes;