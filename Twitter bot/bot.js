var Twit = require("twit");
var config = require("./config");

var T = new Twit({ config });

T.get("search/tweets", { q: "banana since:2011-11-11", count: 100 }, gotData);

var params = {
    q:'rainbow',
    count: 2
};

function gotData(err, data, response){
    let tweets = data.statuses;
    for( let i=0; i<tweets.length;i++){
        console.log(tweets[i].text);
    }
}