angular.module('CodeQuiz').factory('Question', function($resource){
  return $resource('http://localhost:3000/api/v1/questions/:id', {id: "@id"}, {
    destroy: {
      method: "DELETE"
    }
    // ,
    // createQuestion: {
    //   method: 'POST',
    //   url: 'http://localhost:3000/api/v1/questions',
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    // }
  });
});