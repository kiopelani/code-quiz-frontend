angular.module('CodeQuiz').factory('Category', function($resource){
  return $resource('/categories/:id');
})