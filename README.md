# LIRI Bot

### Overview
In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

![gif of terminal commands](https://github.com/shivjisakina/liri-node-app/blob/master/images/lirinode.gif)

------------------------------------------------------------------------------------------------------------------------------

### Liri takes in the following commands:

------------------------------------------------------------------------------------------------------------------------------

#### 1. my-tweets 
```
Shows your last 20 tweets and when they were created
```
![Image of tweets in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/tweets1.png)

------------------------------------------------------------------------------------------------------------------------------

#### 2. spotify-this-song + 'song name here' 
```
It shows you the following:
  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  (If no song is provided then the program will default to you to "The Sign" by Ace of Base.)
```
#### Search:
![Image of spotify search in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/spotifysearch1.png)

#### Default:
![Image of spotify default in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/spotifydefault.png)

------------------------------------------------------------------------------------------------------------------------------

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
#### Search
![Image of movie search in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/moviesearch.png)

#### Default
![Image of movie default in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/moviedefault.png)

------------------------------------------------------------------------------------------------------------------------------

#### 4. do-what-it-says
```
LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
(It will run "spotify-this-song" for "I Want it That Way)
```
![Image of fs readfile in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/dowhatitsays.png)

------------------------------------------------------------------------------------------------------------------------------
#### 5. 9gag  
```
Gives you the meme title and url
```
![Image of 9gag in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/9gag.png)

------------------------------------------------------------------------------------------------------------------------------
#### 6. 8ball + 'your question here'
```
Answers your burning questions
```

#### Search
![Image of 8ball search in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/8ball.png)
* (Pro tip: Ask the question over and over again untill you get the answer you want :stuck_out_tongue_closed_eyes:)
#### Default
![Image of 8ball default in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/8balldefault.png)

------------------------------------------------------------------------------------------------------------------------------
#### 7. chalk + 'your color choice'
```
Changes the color of the text in the terminal
```

![Image of chalk default in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/chalk.png)

------------------------------------------------------------------------------------------------------------------------------
#### 8. password 
```
Generates a random password for you
```

![Image of password in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/password.png)

------------------------------------------------------------------------------------------------------------------------------
#### 9. location + 'a landmark or well known location" 
```
Generates the address for you
```

![Image of geocoder in terminal](https://github.com/shivjisakina/liri-node-app/blob/master/images/geocoder.png)

------------------------------------------------------------------------------------------------------------------------------
#### Quick list of commands for your reference:

* “node liri a” (will give you an error and show you options)
* “node liri t” (tweets)
* “node liri s” (spotify default)
* “node liri s -song search-” (spotify search)
* “node liri m” (movie default)
* “node liri m -movie search-” (movie search)
* “node liri d” (do-what-it-says aka readfile)
* “node liri j” (9gag joke)
* “node liri 8” (8ball default)
* “node liri 8 -question-” (asking the 8ball a question)
* “node liri c a” (shows you text color options)
* “node liri c r” (turning the text red)
* “node liri c g” (turning the text green)
* “node liri c b” (turning the text blue)
* “node liri c p” (turning the text magenta)
* “node liri c y” (turning the text yellow)
* “node liri l -landmark-” (gives you the location for any landmark)

------------------------------------------------------------------------------------------------------------------------------
