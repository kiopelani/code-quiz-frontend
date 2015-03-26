angular.module('CodeQuiz').directive('cqPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "assets/templates/directives/cqPageNav.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return ("/" + name === $location.path());
      };
    }
  };
});