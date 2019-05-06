var friends = require('../data/friends.js');

// The app here is the app we made in the 
// server.js file. (var app = express();)
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        console.log(req.body);
        friends.push(req.body);
    })
}