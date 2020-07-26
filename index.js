var newTweets;
function userTweets(user) {
  //if user, hide everything else but user
  if(user === 'Julius_Caesar') {
    $('.Ovid').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  if(user === 'Ovid') {
    $('.Julius_Caesar').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  if(user === 'Virgil') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Caligula').hide();
  }
  if(user === 'Caligula') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Virgil').hide();
  }
}
$(document).ready(() => {
  const $body = $('body');
  var timeArr = []; // delete b/c not used?
  var timeStamp = 0;
  newTweets(true);

  $body.before("<button id = 'myButton'>Ostende magis tweets!</button>");
  $('#myButton').click(function(){
    newTweets();
  });

  $('#tweet').click(function(){
    const userName = $('#userName').val();
    const tweet = $('#tweetBox').val();
    let tweetObj = {
      user: userName,
      message: tweet,
      created_at: new Date()
    };
    // console.log(tweetObj);
    streams.users[userName] = [];
    addTweet(tweetObj);
    newTweets();
  });

  function newTweets(firstRun = false) {
    streams.home.map(tweet => {
    if (firstRun || tweet.created_at > timeStamp){
      const $tweet = $(
        `<div class = '${tweet.user}'>` +
        `<div>` +
          `@<a href="#" onclick="userTweets('${tweet.user}')">${tweet.user}</a>: ${tweet.message}` +
        `</div>` +
        `<div class ="times">${moment(tweet.created_at).fromNow()}</div>` +
        `<p></p>` +
        `</div>`
      );
      $("#tweet-body").prepend($tweet);
      timeStamp = tweet.created_at;
  }});
  }
});
