angular.module('CodeQuiz').controller('QuestionsCreateController', function(Question, $scope){
  $scope.isSaving = false;

 $scope.createQuestion = function(question){
  $scope.isSaving = true;
    console.log('savingggg');
  $scope.isSaving = false;
  };
});