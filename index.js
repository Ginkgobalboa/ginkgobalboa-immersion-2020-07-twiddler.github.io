//create a global variable refreshTweets
var refreshTweets;
//create a function userTweets to hide everything else but user tweets when a user is clicked
function userTweets(user) {
  //if user is 'Julius_Caesar' hide everything else but user
  if (user === 'Julius_Caesar') {
    $('.Ovid').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  //if user is 'Ovid' hide everything else but user
  if (user === 'Ovid') {
    $('.Julius_Caesar').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  //if user is 'Virgil' hide everything else but user
  if (user === 'Virgil') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Caligula').hide();
  }
  //if user is 'Caligula' hide everything else but user
  if (user === 'Caligula') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Virgil').hide();
  }
}
//in $document
$(document).ready(() => {
  //create a constant $body set equal to $('body')
  const $body = $('body');
  //call refreshTweets
  refreshTweets();

  //prepend myButton to $body
  $body.prepend("<button id = 'myButton'>Ostende magis tweets!</button>");
  //when myButton is clicked, call refreshTweets
  $('#myButton').click(function () {
    refreshTweets();
  });

  //on click
  $('#tweet').click(function () {
    //set username = to the value of $('userName')
    const userName = $('#userName').val();
    //set tweet = to the value of $('tweetBox')
    const tweet = $('#tweetBox').val();
    //set tweetBox = to and object containing user: userName, message: tweet, created_at: new Date()
    let tweetObj = {
      user: userName,
      message: tweet,
      created_at: new Date()
    };
    //set streams.users[userName] = to an array literal
    streams.users[userName] = [];
    //call addTweet on tweetObj
    addTweet(tweetObj);
    //invoke refreshTweets
    refreshTweets();
  });

  //create a function to refresh tweets
  function refreshTweets() {
    //set $reversedTweets = to a new div called new-tweets
    let $reversedTweets =$("<div id=new-tweets></div")
    //for each streams.home
    streams.home.forEach((tweet) => {
      //set $newTweets = to    
      let $newTweets = $(
        // a new div with the class '${tweet.user}'
        `<div class = '${tweet.user}'>` +
        //plus a div 
        `<div>` +
        //containing a link that has a clickable tweet.user name
        `@<a href="#" onclick="userTweets('${tweet.user}')">${tweet.user}</a>: ${tweet.message}` +
        `</div>` +
        //plus a div with the class "times"
        `<div class ="times">${moment(tweet.created_at).fromNow()}</div>` +
        //plus a paragraph
        `<p></p>` +
        //div closing tag
        `</div>`
      );
      //prepend $newTweets to $reversedTweets
      $newTweets.prependTo($reversedTweets);
    });
    //empty tweet container
    $("#tweet-body").empty();
    //prepend $reversedTweets to $("#tweet-body")
    $("#tweet-body").prepend($reversedTweets);
  }
});

