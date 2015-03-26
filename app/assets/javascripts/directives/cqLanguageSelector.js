angular.module('CodeQuiz').directive('cqLanguageSelector', function(){
  return {
    replace: true,
    restrict: "E",
    require: "?ngModel",
    templateUrl: 'assets/templates/directives/cqLanguageSelector.html',
    link: function(scope, element, attrs, ngModelCtrl){
      var activeLanguage = "";
      scope.languages = ["ruby", "javascript", "html", "css", "sql"];
      scope.isActive = function(language){
        return (activeLanguage && activeLanguage === language);
      };
      scope.toggleLanguage = function(language){
        if(language === activeLanguage){
          activeLanguage = "";
        }
        else{
          activeLanguage = language;
        }
        ngModelCtrl.$setViewValue(activeLanguage);
      };

      ngModelCtrl.$render = function(){
        activeLanguage = ngModelCtrl.$viewValue;
      };
    }

  }
});