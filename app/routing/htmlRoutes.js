// DEPENDENCIES
//path package to get the correct file path for our html
var path = require("path");

// ROUTING  
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // If no specific route is used default to home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });



};