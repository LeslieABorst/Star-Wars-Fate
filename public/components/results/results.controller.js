"use strict"

angular
  .module("app")
  .controller("ResultsController", function(SwapiService) {
    const $ctrl = this;
    $ctrl.userAnswers = [];
    
      $ctrl.luke = [a,a,a,a];
      [a,a,a,b]
      [a,a,b,a]
      [a,a,b,b]
      [a,b,a,a]
      [a,b,a,b]
      [a,b,b,a]
      [a,b,b,b]
      [b,a,a,a]
      [b,a,a,b]
      [b,a,b,a]
      [b,a,b,b]
      [b,b,a,a]
      [b,b,a,b]
      [b,b,b,a]
      [b,b,b,b]
   

    SwapiService.getPeople().then(response => {
      console.log(response.data);
    })

});

//JSON.stringify(answers) === JSON.stringify(userAnswers)