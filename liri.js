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

//----------------------------------------------------------------------------------------------------------------------

// Variables to hold the index in terminal
var process2 = process.argv[2];
var process3 = process.argv[3];

//  NPM packages and keys
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

//----------------------------------------------------------------------------------------------------------------------

//SWITCH STATEMENT

switch (process2) {

    // case that calls out twitter function
    case "my-tweets":
    case "tweets":
    case "t":
    case "-t":

        twitter();

        break;

    // case that calls out spotify function
    case "spotify-this-song":
    case "spotify":
    case "s":
    case "-s":

        // If statement where process3 is undefined
        if (process3 === undefined) {

            // Shows default info for "The Sign by Ace of Base"
            console.log("Your search was undefined, but here's The Sign by Ace of Base:");
            process3 = "The Sign Ace of Base";
            spotify();

        // Else statement that calls out spotify function if process3 is defined
        } else {

            spotify();

        }

        break;

    // case that calls out omdb function
    case "this-movie":
    case "movie":
    case "m":
    case "-m":

        // If statement where process3 is undefined
        if (process3 === undefined) {

            // Shows default info for "Mr. Nobody"
            console.log("Your search was undefined, but here's the information for Mr. Nobody:");
            process3 = "Mr. Nobody";
            omdb();

        // Else statement that calls out the omdb function if process3 is defined
        } else {

            omdb();

        }

        break;

    // case that calls out readfile function
    case "do-what-it-says":
    case "d":
    case "-d":

        readfile();

        break;

    // default incase the user types in the wrong command
    default:

        console.log("Please choose from one of the following: (my-tweets, tweets, t, -t), (spotify-this-song, spotify, s, -s), (this-movie, movie, m, -m,), or (do-what-it-says, d, -d)")

}

//----------------------------------------------------------------------------------------------------------------------

// TWITTER

function twitter() {

    // Twitter package for user based authentication:
    var client = new Twitter(
        keys
    );

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

        // Gets the tweets
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }

        // Gets the time they were tweeted
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
        }

    });
}

//----------------------------------------------------------------------------------------------------------------------

// SPOTIFY

function spotify() {

    // Spotify API auth
    var spotifyrequire = new Spotify({
        id: "cf7b029e5af94b77940489590854cc02",
        secret: "9ddf0379eaff44848c8cb88614e048da"
    });

    // Spotify search query
    spotifyrequire.search({type: 'track', query: process3, limit: 1}, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //console.log(data);

        // For looping through items to get the items array
        for (var i = 0; i < data.tracks.items.length; i++) {
            //console.log(data.tracks.items[i]);

            // ARTISTS NAME
            console.log(data.tracks.items[i].album.artists[i].name);

            // THE SONG NAME
            console.log(data.tracks.items[i].album.name);

            // THE LINK
            console.log(data.tracks.items[i].album.uri);

            // THE ALBUM NAME
            // I cant find the album name in the object(?)

        }

    });

}

//----------------------------------------------------------------------------------------------------------------------

// OMDB

function omdb() {

    // Variable where movieName is the third index
    var movieName = process3;

    // OMDB queryURL
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

    //console.log(queryUrl);

    // Request package function
    request(queryUrl, function (error, response, body) {

        // If theres an error, itll console log it
        if (error) {
            return console.log('Error occurred: ' + err);
        }

        // If there isnt an error
        if (!error && response.statusCode === 200) {

            // Console log movie information
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });

}

//----------------------------------------------------------------------------------------------------------------------

// FS

function readfile() {

    // Read the random.txt file
    fs.readFile("random.txt", "utf8", function(err, data) {

        // If theres an error, console log it
        if (err) {
            return console.log(err);
        }

        // Split the data in random.txt by commas
        var data = data.split(",");

        // Switch process3 with the first index from data
        process3 = data[1];

        // Console log the array
        console.log(data);

        // Call out spotify function so it gives song information
        spotify();

    });
};

//----------------------------------------------------------------------------------------------------------------------
