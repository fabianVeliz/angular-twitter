;(function(){

  TWITTER.controller('TweetsCtrl', ['$scope', '$route', TweetsCtrl]);

  function TweetsCtrl($scope, $route){
    $scope.tweets = $route.current.locals.index;

    $scope.remove = function(item){
      if (!confirm('Are you sure?')){
        return;
      }

      var index = $scope.tweets.indexOf(item);
      $scope.tweets.splice(index, 1);
    }
  }

})();