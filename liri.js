// PSEUDO CODE & INSTRUCTIONS

// Write the code to grab data from keys.js and store in var
// Get all of the packages and store them in variables(?)

// Take in the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

// Variables ill need:
// var keys
// var Twitter
// var Spotify
// var Request
// var fs(?)
// var searchTweets

// MY-TWEETS
// Show 20 latest tweets
//

// SPOTIFY-THIS-SONG
// if search === true Show artist, song name, link, and album
// else default to "The Sign" by Ace of the Base
//

// MOVIE-THIS
/* The following info:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
* Rotten Tomatoes URL. */
// else output data  for 'Mr. Nobody'
//

// DO-WHAT-IT-SAYS
// fs node package
// take text inside random.txt and use it to call a LIRI command (I Want It That Way)
//


// Variables to hold the index in terminal
var process2 = process.argv[2];
var process3 = process.argv[3];

//----------------------------------------------------------------------------------------------------------------------

// Twitter variables
var keys = require('./keys.js');
//console.log(keys);

var Twitter = require('twitter');

// Twitter package for user based authentication:
var client = new Twitter(
    keys
);
//console.log(client);

// if statement where the 2nd index is "my-tweets"
if (process2 === "my-tweets") {
    // Getting 20 tweets
    var params = {screen_name: 'lirinodeucf'};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            //console.log(tweets);
        }

        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }

    });
}

//----------------------------------------------------------------------------------------------------------------------

// Spotify Variables
var Spotify = require('node-spotify-api');

// Spotify API auth
var spotify = new Spotify({
        id: "cf7b029e5af94b77940489590854cc02",
    secret: "9ddf0379eaff44848c8cb88614e048da"
});

// if statement where the 2nd index is "spotify-this-song"
if (process2 === "spotify-this-song") {

    // Spotify search query
    spotify.search({type: 'track', query: process3}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //console.log(data);

        // For looping through items to get album and artist info
        for (var i = 0; i < data.tracks.items.length; i++) {
            console.log(data.tracks.items[i]);

            // For looping through items to get the artists name
            for (var j = 0; j < data.tracks.items[i].album.artists.length; j++) {
                //console.log(data.tracks.items[i].album.artists[i].name);
            }
        }

    });
}

//----------------------------------------------------------------------------------------------------------------------
