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

// SPOTIFY-THIS-SONG
// if search === true Show artist, song name, link, and album
// else default to "The Sign" by Ace of the Base

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

// DO-WHAT-IT-SAYS
// fs node package
// take text inside random.txt and use it to call a LIRI command (I Want It That Way)


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

        // If theres an error, it'll throw it
        if (error) {
            throw error;
        }
        // If theres isnt an error, it'll console log the tweets
        if (!error) {
            //console.log(tweets);
        }

        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }

        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
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

        // ARTIST(S)

        // For looping through items to get artist info
        for (var i = 0; i < data.tracks.items.length; i++) {
            //console.log(data.tracks.items[i]);

            // For looping through items to get the artists name
            for (var j = 0; j < data.tracks.items[i].album.artists.length; j++) {
                //console.log(data.tracks.items[i].album.artists[j].name);

                //  COME BACK TO THIS BC ERROR!!!!!!!!!

                /*  // For looping through items to get the artists name
                 for (var k = 0; k < data.tracks.items[i].album.artists[i]; k++) {
                 console.log(data.tracks.items[i].album.artists[i].name);
                 }*/

                // THE SONG NAME
            }

        }
        for (var j = 0; j < data.tracks.items[i].album.name.length; j++) {
            //console.log(data.tracks.items[i].album.album_type.name);
        }
    });
}

//----------------------------------------------------------------------------------------------------------------------

// OMDB
/*
 * Title of the movie.
 * Year the movie came out.
 * IMDB Rating of the movie.
 * Country where the movie was produced.
 * Language of the movie.
 * Plot of the movie.
 * Actors in the movie.
 * Rotten Tomatoes URL. */

// Variables
var request = require("request");

var nodeArgs = process.argv;

var movieName = process3;

if (process2 === "movie-this") {

    /*for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {

            movieName = movieName + "+" + nodeArgs[i];

        }

        else {

            movieName += nodeArgs[i];

        }
    }*/

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    //console.log(queryUrl);

    request(queryUrl, function (error, response, body) {

        if (error) {
            return console.log('Error occurred: ' + err);
        }

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);

            for (var i = 0; i < JSON.parse(body).Ratings; i++) {
                console.log("IMDB rating: " + JSON.parse(body).Ratings.imdbRating);
            }
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            //console.log("Rotton Tomatoes URL: " + JSON.parse(body).);
        }
    });
}
//----------------------------------------------------------------------------------------------------------------------