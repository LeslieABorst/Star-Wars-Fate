"use strict";
{
    angular.module('app', ['ngRoute'], )
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<main></main>'
                })
                .when('/results', {
                    template: '<results></results>'
                })
        });
}