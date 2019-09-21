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
            scoreDifference: 1000
        }
        var userScoreSum = 0;
        var userData = req.body;
        var userScores = userData.scores;

        for (var i = 0; i < userScores.length; i++) {
            userScoreSum += userScores[i];
        }

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = userScoreSum;
            for (var j = 0; j < friends[i].Scores.length; j++) {
                totalDifference = Math.abs(totalDifference - friends[i].Scores[j])
            }

            if (totalDifference < bestMatch.scoreDifference) {
                bestMatch.name = freinds[i].name;
                bestMatch.photo = freinds[i].photo;
                bestMatch.scoreDifference = totalDifference;
            }
        }

        friends.push(userData);

        res.json(bestMatch);
    });



};