angular.module('CodeQuiz').controller('QuestionsShowController', function(Question, $scope, $routeParams, $location){
  $scope.question = Question.get({id: $routeParams.id});

  $scope.deleteQuestion = function(question){
    question.$destroy().then(function(){
      $location.path("/");
    });
  }
});