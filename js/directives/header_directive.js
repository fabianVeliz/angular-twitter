;(function(){

  TWITTER.directive('headerTemplate', headerTemplate);

  function headerTemplate(){
    return {
      restrict: 'E',
      templateUrl: 'templates/header.html'
    };
  }

})();