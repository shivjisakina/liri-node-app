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
// default output data  for 'Mr. Nobody'*/

// DO-WHAT-IT-SAYS
// fs node package
// take text inside random.txt and use it to call a LIRI command (I Want It That Way)

// BONUS
// fs.writeFile
// JSON.stringify data from functions(?)
// write it in the log.txt file
// append to file

// ***Comment ending tags so I know everything ends***

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
var gagScraper = require('9gag-scraper');
var eightball = require('8ball')()
//var outputFileSync = require("output-file-sync");
//var knockknock = require('knock-knock-jokes');

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

    // case that calls out 9gag function
    case "joke":
    case "j":
    case "9gag":

        getGags();

        break;

    // case that calls out 8ball function
    case "8ball":
    case "8":
    case "8b":
    case "b":

        // If statement where process3 is undefined
        if (process3 === undefined) {

            // Shows default info for "Mr. Nobody"
            console.log("Try asking the 8ball a question! (Tip: put your question in quotes)");

            // Else statement that calls out the omdb function if process3 is defined
        } else {

            eightBall();

        }

        break;

    // case that calls out knock-knock function
    /*
    case "knock-knock":
    case "k":
    case "knock":

        knockKnock();

        break;*/

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

        // Adding breaks for better readability in the terminal
        console.log('----------------------------------------------------------');
        console.log('Tweets:');
        console.log('----------------------------------------------------------');

        // Gets the tweets
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }

        console.log('----------------------------------------------------------');
        console.log('Time:');
        console.log('----------------------------------------------------------');

        // Gets the time they were tweeted
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
        }

        console.log('----------------------------------------------------------')

    }); // client.get function

} // twitter function

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

        // For looping through data to get the items array
        for (var i = 0; i < data.tracks.items.length; i++) {

            // Sets the data from the for loop in a var to cut down code
            var items = data.tracks.items[i];

            // Adding breaks for better readability
            console.log('----------------------------------------------------------');

            console.log('Spotify\'s search result for', process3, ":");

            // ARTISTS NAME
            console.log(items.album.artists[i].name);

            // THE SONG NAME
            console.log(items.album.name);

            // THE LINK
            console.log(items.album.uri);

            // THE ALBUM NAME
            console.log(items.name);

            console.log('----------------------------------------------------------')

        } // for loop

    }); // spotifyrequire function

} // spotify function

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

            // Breaks for readability
            console.log('----------------------------------------------------------');
            // Console log movie information
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("IMDB rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);

            console.log('----------------------------------------------------------');

        }

    }); // request function

} // omdb function

//----------------------------------------------------------------------------------------------------------------------

// FS

function readfile() {

    // Read the random.txt file
    fs.readFile("random.txt", "utf8", function (err, data) {

        // If theres an error, console log it
        if (err) {
            return console.log(err);
        }

        // Split the data in random.txt by commas
        var dataSplit = data.split(",");

        // Switch process3 with the first index from data
        process3 = dataSplit[1];

        // Console log the array
        //console.log(data);

        // Call out spotify function so it gives song information
        spotify();

    }); // fs.readFile function
} // readFile function

//----------------------------------------------------------------------------------------------------------------------

// 9GAG
// (this isnt as cool as I thought it would be, but hey, it works!)

// function to get jokes from 9gag
function getGags() {

    new gagScraper("hot").getRandom(function (error, data) {

        //console.log(data.id); // 9GAG post ID
        console.log(data.url); // 9GAG post URL
        console.log(data.title); // 9GAG post title
        //console.log(data.image); // 9GAG post image link

    }); // gagScraper

} // getGags function

//---------------------------------------------------------------------------------------------------------------------

// 8BALL

// function to get answer from 8ball
function eightBall() {

    console.log(process3, {eightball})

} // eightBall function

//----------------------------------------------------------------------------------------------------------------------
                                        // FUTURE DEVELOMENTS(?) & BONUS
//----------------------------------------------------------------------------------------------------------------------

// KNOCK KNOCK

// function to get jokes from knock-knock-jokes
// The documentation on this package wasn't great :(

/*function knockKnock() {


    knockknock(function (error, response, body) {

        // If theres an error, itll console log it
        if (error) {
            return console.log('Error occurred: ' + err);
        }

        console.log(response)
        console.log(body)

    }); //knockknock params function
} // knockknock() function*/

//----------------------------------------------------------------------------------------------------------------------

// BONUS

/*
function writefile() {

    // Stringify the output from the functions and push them into empty arrays
    var twitterData = [];
    var spotifyData = [];
    var omdbData = [];

    twitterData.push(twitter());
    spotifyData.push(spotify());
    omdbrData.push(omdb())

    // Write on the random.txt file
    fs.writeFile("log.txt", 'utf-8', function (err, data) {

        //console.log(data);

        // If there's an error, console log it
        if (err) {
            return console.log(err);
        }

        outputFileSync('log.txt', twitterData, spotifyData, omdbData, 'utf-8');

    }); // fs.writefile function
} // writefile function

writefile()*/
