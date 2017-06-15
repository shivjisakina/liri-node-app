# LIRI Bot

### Overview
#### In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

### Liri takes in the following commands:

#### my-tweets (shows your last 20 tweets)

#### spotify-this-song '<song name here>' 
It shows you the following:
  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  (If no song is provided then the program will default to you to "The Sign" by Ace of Base.)

#### movie-this '<movie name here>'
It shows you the following: 
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  * Rotten Tomatoes URL.
  (If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.')
  
#### do-what-it-says
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
(It will run "spotify-this-song" for "I Want it That Way)
