angular.module('CodeQuiz').controller('QuestionsIndexController', function(Question, $scope){
  $scope.questions = Question.query();
  $scope.search = {};
});