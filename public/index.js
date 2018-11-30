"use strict";
{
    angular.module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<main></main>'
                })
                .when('/movieList', {
                    template: '<results></results>'
                })
        });
}