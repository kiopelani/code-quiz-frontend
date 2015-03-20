angular.module('CodeQuiz').controller('QuestionsCreateController', function(Question, $scope, $http, $location){
  $scope.question = new Question();
  $scope.isSaving = false;

  $scope.createQuestion = function(question){
    $scope.isSaving = true;
    var title = question.title;
    var content = question.content;
    var language = question.language;
    var dataList = 'title=' + title + '&content=' + content + '&language=' + language;
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/questions',
      data: dataList,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      $scope.isSaving = false;
      $location.path('/questions');
    })
    .error(function(data){
      $scope.isSaving = false;
      console.log("ERROR");
      console.log(data);
    })

  };


});