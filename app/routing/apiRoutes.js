var friends = require('../data/friends.js');


// The app here is the app we made in the 
// server.js file. (var app = express();)
module.exports = function (app) {
    app.get('/api/survey', function (req, res) {
        res.json(friends);
    });
}