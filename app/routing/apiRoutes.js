var friends = require("../data/friends.js");

// ROUTING  
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 100
        }

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            //console.log(friends[i]);
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= bestMatch.scoreDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.scoreDifference = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    });



};