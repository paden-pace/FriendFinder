

var apiRoutes = function(app){
    app.get("/api/friends", function(req, res) {
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
};




module.exports = apiRoutes;