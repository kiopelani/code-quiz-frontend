angular.module('CodeQuiz').config(function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: '/questions'
  })
  .when('/questions', {
    templateUrl: 'assets/templates/questions/index.html',
    controller: 'QuestionsIndexController'
  })
  .when('/questions/new', {
    templateUrl: 'assets/templates/questions/new.html',
    controller: 'QuestionsCreateController'
  })
  .when('/questions/:id', {
    templateUrl: 'assets/templates/questions/show.html',
    controller: 'QuestionsShowController'
  });
});