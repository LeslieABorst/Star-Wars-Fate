"use strict";

angular
  .module("app")
  .controller("MainController", function(SwapiService, $location) {
    const $ctrl = this;
    $ctrl.letmesee = true;
    $ctrl.qone = true;
    $ctrl.qtwo = true;
    $ctrl.qthree = true;
    $ctrl.qfour = true;

    $ctrl.quizStart = function() {
        $ctrl.letmesee = false;
    };

    $ctrl.qoneAnswerA = function() {
        $ctrl.answerA = "a";
        SwapiService.userAnswers.push($ctrl.answerA);
        $ctrl.qone = false;
        $ctrl.qtwo = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qoneAnswerB = function() {
        $ctrl.answerB = "b";
        SwapiService.userAnswers.push($ctrl.answerB);
        $ctrl.qone = false;
        $ctrl.qtwo = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qtwoAnswerA = function() {
        $ctrl.answerA = "a";
        SwapiService.userAnswers.push($ctrl.answerA);
        $ctrl.qtwo = true;
        $ctrl.qthree = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qtwoAnswerB = function() {
        $ctrl.answerB = "b";
        SwapiService.userAnswers.push($ctrl.answerB);
        $ctrl.qtwo = true;
        $ctrl.qthree = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qthreeAnswerA = function() {
        $ctrl.answerA = "a";
        SwapiService.userAnswers.push($ctrl.answerA);
        $ctrl.qthree = true;
        $ctrl.qfour = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qthreeAnswerB = function() {
        $ctrl.answerB = "b";
        SwapiService.userAnswers.push($ctrl.answerB);
        $ctrl.qthree = true;
        $ctrl.qfour = false;
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qfourAnswerA = function() {
        $ctrl.answerA = "a";
        SwapiService.userAnswers.push($ctrl.answerA);
        $ctrl.qfour = true;
        $location.url("/results");
        console.log(SwapiService.userAnswers);
    }

    $ctrl.qfourAnswerB = function() {
        $ctrl.answerB = "b";
        SwapiService.userAnswers.push($ctrl.answerB);
        $ctrl.qfour = true;
        $location.url("/results");
        console.log(SwapiService.userAnswers);
    }
    
});