"use strict";

angular
  .module("app")
  .controller("MainController", function(SwapiService) {
    const $ctrl = this;
    $ctrl.letmesee = true;

    $ctrl.quizStart = function() {
        $ctrl.letmesee = false;
    };

    $ctrl.processAnswerA = function() {
        $ctrl.answerA = "a";
        SwapiService.userAnswers.push($ctrl.answerA);
        console.log(SwapiService.userAnswers);
    }

    $ctrl.processAnswerB = function() {
        $ctrl.answerB = "b";
        SwapiService.userAnswers.push($ctrl.answerB);
        console.log(SwapiService.userAnswers);
    }
    
});