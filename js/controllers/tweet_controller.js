;(function(){

  TWITTER.controller('TweetCtrl', ['$scope', '$route', '$routeParams', 'Tweet', TweetCtrl]);

  function TweetCtrl($scope, $route, $routeParams, Tweet){
    $scope.tweet = $route.current.locals.show;
  }

})();