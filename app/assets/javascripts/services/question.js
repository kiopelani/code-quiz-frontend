angular.module('CodeQuiz').factory('Question', function($resource){
  return $resource('https://gyzen-code-quiz.herokuapp.com/api/v1/questions/:id', {id: "@id"}, {
    destroy: {
      method: "DELETE"
    }
  });
});