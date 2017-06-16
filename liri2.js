// Variables to hold the index in terminal
var process2 = process.argv[2];
var process3 = process.argv[3];

//  NPM variables and keys
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

//----------------------------------------------------------------------------------------------------------------------

//SWITCH STATEMENT

switch (process2) {
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        spotify();
        break;
    case "this-movie":
        omdb();
        break;
    case "do-what-it-says":
        readfile();
        break;
    default:
        console.log("Please choose from one of the following: my-tweets, spotify-this-song, this-movie, do-what-it-says")
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

        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }

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

        // ARTIST(S)

        // For looping through items to get artist info
        for (var i = 0; i < data.tracks.items.length; i++) {
            //console.log(data.tracks.items[i]);

            // For looping through items to get the artists name
            for (var j = 0; j < data.tracks.items[i].album.artists.length; j++) {
                console.log(data.tracks.items[i].album.artists[j].name);


                // THE SONG NAME
            }

        }
        /*for (var j = 0; j < data.tracks.items[i].album.name.length; j++) {
            console.log(data.tracks.items[i].album.album_type.name);
        }*/
    });

}

//----------------------------------------------------------------------------------------------------------------------

// OMDB

function omdb() {

    var movieName = process3;

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
            console.log("IMDB rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            //console.log("Rotton Tomatoes URL: " + JSON.parse(body).);
        }
    });

}

//----------------------------------------------------------------------------------------------------------------------

// FS

function fs() {

    // We will read the existing bank file
    fs.readFile("bank.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }

}

//----------------------------------------------------------------------------------------------------------------------
