# LIRI Bot

### Overview
In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

### Liri takes in the following commands:

#### 1. my-tweets 
```
Shows your last 20 tweets
```
![Image of tweets in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/Screen%20Shot%202017-06-16%20at%2011.45.10%20PM.png)


#### 2. spotify-this-song + 'song name here' 
```
It shows you the following:
  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  (If no song is provided then the program will default to you to "The Sign" by Ace of Base.)
```

#### 3. movie-this + 'movie name here'
```
It shows you the following: 
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  (If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.')
```  

![Image of movie info in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/Screen%20Shot%202017-06-17%20at%2010.14.48%20AM.png)


#### 4. do-what-it-says
```
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
(It will run "spotify-this-song" for "I Want it That Way)
```
