"use strict";

angular
  .module("app")
  .service("SwapiService", function($http) { 
    const service = this;
    service.userAnswers = [];

    service.getPeople = (people) => {
      return $http({
        method: "GET",
        url: "proxy/https://swapi.co/api/people",
        data: people
      });
    };



  });