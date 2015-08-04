(function(){
    'use strict';

    var app = angular.module('angularJS', ['ngRoute', 'appControllers']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        
        .when('/', {
            templateUrl : 'views/log.html',
            controller  : 'logCtrl'
        })
        .when('/home', {
            templateUrl : 'views/home.html',
            controller  : 'homeCtrl'
        })
        .when('/thanks', {
            templateUrl : 'views/thanks.html',
            controller  : 'thanksCtrl'
        })
        .when('/rules', {
            templateUrl : 'views/rules.html',
            controller  : 'rulesCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
    }]);

    angular.module('appControllers', []);
})();