var refreshTweets;
function userTweets(user) {
  //if user, hide everything else but user
  if (user === 'Julius_Caesar') {
    $('.Ovid').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  if (user === 'Ovid') {
    $('.Julius_Caesar').hide();
    $('.Virgil').hide();
    $('.Caligula').hide();
  }
  if (user === 'Virgil') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Caligula').hide();
  }
  if (user === 'Caligula') {
    $('.Julius_Caesar').hide();
    $('.Ovid').hide();
    $('.Virgil').hide();
  }
}
$(document).ready(() => {
  const $body = $('body');
  var timeArr = []; // delete b/c not used?
  var timeStamp = 0;
  refreshTweets();

  $body.prepend("<button id = 'myButton'>Ostende magis tweets!</button>");
  $('#myButton').click(function () {
    refreshTweets();
  });

  $('#tweet').click(function () {
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
    refreshTweets();
  });

  function refreshTweets() {
    let $reversedTweets =$("<div id=new-tweets></div")
    streams.home.forEach((tweet) => {
         let $newTweets = $(
        `<div class = '${tweet.user}'>` +
        `<div>` +
        `@<a href="#" onclick="userTweets('${tweet.user}')">${tweet.user}</a>: ${tweet.message}` +
        `</div>` +
        `<div class ="times">${moment(tweet.created_at).fromNow()}</div>` +
        `<p></p>` +
        `</div>`
      );
      $newTweets.prependTo($reversedTweets);
    });
    //empty tweet container
    $("#tweet-body").empty();
    $("#tweet-body").prepend($reversedTweets);
  }
});

