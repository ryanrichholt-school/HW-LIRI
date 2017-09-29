var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');


function spotifySearch(query){
    var spotify = new Spotify({
        id: keys.spotify.clientid,
        secret: keys.spotify.clientsecret,
    })

    spotify.search({
        type: 'track',
        query: query,
    }, function(error, data){
        if(error){
            console.log('Error occured searching Spotify: ' + error);
        } else {
            //console.log(data.tracks);
            console.log(data.tracks.items[0]);
            // for(i in data.tracks.items){
            //     console.log(data.tracks.items[i]);
            // }
        }
    });
}


function twitterSearch(query){
    var client = new Twitter({
      consumer_key: keys.twitter.consumer_key,
      consumer_secret: keys.twitter.consumer_secret,
      access_token_key: keys.twitter.access_token_key,
      access_token_secret: keys.twitter.access_token_secret,
    });
 
    var params = {screen_name: 'liri_is_lit'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(tweets)
      }
    });
}


function omdbRequest(query){
    var url = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=" + keys.omdb.apikey;
    request(url, function (error, response, body) {
        if(error){
            console.log('error:', error); 
        } else {
            console.log('body:', body);
        }        
    });
}


spotifySearch('let it be')
omdbRequest('Titanic')
twitterSearch('nothing')
