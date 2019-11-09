var Twit = require("twit");
var config = require("./config");

var T = new Twit({ config });
var stream = T.stream('user');

T.get("search/tweets", { q: "banana since:2011-11-11", count: 100 }, gotData);

var params = {
    q:'rainbow',
    count: 2
};

var newTweet = {
    status: '#codingrainbow for node.js'
};

function gotData(err, data, response){
    let tweets = data.statuses;
    for( let i=0; i<tweets.length;i++){
        console.log(tweets[i].text);
    }
}

T.post('statuses/update',newTweet, tweeted);

T.get('search/tweets', params, gotData);

tweeeted = (err, data, response) => {
    console.log(data);
    if(err){
        console.log('error: ' +err);
    }
    else {
        console.log('correct');
    }
};

gotData = (err, data, response) => {
    let tweet = data.statuses;
    for( let i=0; i<tweet.length;i++){
        console.log(tweet[i].text);

    }
};

T.post('statuses/update', newTweet, gotData);

tweetIt = (msg) => {
    let rand = Math.floor(Math.random()*2100);

    T.post('statuses/update', msg, gotData);

}

stream.on('follow', followed);

followed = (e) => {
    let name = e.source.name;
    let screenName = e.source.screen_name;
    tweetIt('.@'+screenName+ ' do you like bots');
}
