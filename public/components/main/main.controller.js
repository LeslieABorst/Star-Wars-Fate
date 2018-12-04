"use strict";

angular
  .module("app")
  .controller("MainController", function(SwapiService) {
    const $ctrl = this;
    $ctrl.letmesee = true;

    $ctrl.quizStart = function() {
        $ctrl.letmesee = false;
        console.log("Im working!!");
    };

    SwapiService.getPeople().then(response => {
      console.log(response.data);
    })
});