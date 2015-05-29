TWITTER.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl : 'templates/tweets.html',
      controller  : 'TweetsCtrl',
      resolve: {
        index: function(Tweet){
          return Tweet.index();
        }
      }
    })
    .when('/tweets/:id', {
      templateUrl : 'templates/tweet.html',
      controller  : 'TweetCtrl',
      resolve : {
        show : function(Tweet, $route){
          return Tweet.show($route.current.params.id);
        }
      }
    });

});