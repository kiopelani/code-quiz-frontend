angular.module('CodeQuiz').filter('languageFilter', function(){
  return function(collection, language){
    var newCollection = [];

    if(language){
      for(var i=0, l=collection.length; i < l; i++){
        if(collection[i].language === language){
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    }
    else {
      return collection;
    }

  }
});