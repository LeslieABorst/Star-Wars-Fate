"use strict";

angular
  .module("app")
  .controller("MainController", function(SwapiService) {
    const $ctrl = this;

    SwapiService.getPeople().then(response => {
      console.log(response.data);
    })
});