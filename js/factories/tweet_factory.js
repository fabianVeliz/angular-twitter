;(function(){

  TWITTER.factory('Tweet', ['$q', '$http', tweetFctory]);

  function tweetFctory($q, $http){

    var factory = {};

    factory.index = function(){

      var response = $q.defer();

      $http.get('data/tweets.json')
        .success(function(data){
            response.resolve(data);
        })
        .error(function(error){
          response.reject(error);
        });

      return response.promise;

    }//index

    factory.show = function(id){

      var response = $q.defer();

      $http.get('data/tweet_' + id + '.json')
        .success(function(data){
            response.resolve(data);
        })
        .error(function(error){
          response.reject(error);
        });

      return response.promise;

    }//show

    return factory;

  }

})();