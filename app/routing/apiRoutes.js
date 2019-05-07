// The variable for the friends list.
var friends = require('../data/friends.js');

// The app here is the app we made in the 
// server.js file. (var app = express();)
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        // console.logs the '/api/friends' route.
        var UserData = req.body;
        console.log(UserData);


        // The closest match that you can get after 
        // comparing the users with the latest user.
        var closeMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userScores = UserData.scores
        console.log(userScores);

        var totalDifference = 0;

        // Loop through all the users in the database.
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;


            // Here, we loop through all the scores, one by one for each user.
            // In the code below, we used Math.abs to find the absolute value (So no negative values will be outputted).
            for (var j = 0; j < friends[i].length; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friend[i].scores[j]));

                // When the sum of the difference is less then or equal to the closest match
                if (totalDifference <= closeMatch.friendDifference) {


                    closeMatch.name = friends[i].name;
                    closeMatch.photo = friends[i].photo;
                    closeMatch.friendDifference = totalDifference;
                }
            }
        }
        // Here, we push the new user's data into the api file once they hit submit.
        friends.push(UserData);

        // Here, we return the closest match that we can get onto the HTML in the next page.
        res.json(closeMatch);
    });
}