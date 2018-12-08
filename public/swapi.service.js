"use strict";

angular
  .module("app")
  .service("SwapiService", function($http) { 
    const service = this;
    service.userAnswers = [];

    service.getPeople = (id) => {
      return $http({
        method: "GET",
        url: `proxy/https://swapi.co/api/people/${id}`
      });
    };

    service.getMovies = (list) => {
      const promises = list.map(url => $http.get(`proxy/${url}`));
      return Promise.all(promises);
    };

    service.getPlanets = (url) => {
      return $http.get(`proxy/${url}`);
    };

  });