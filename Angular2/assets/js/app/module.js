(function () {
    'use strict';

    angular.module('Alina', [
        'ngRoute',
        'ngResource'
    ]).config(AlinaConfig);

    AlinaConfig.$inject = ['$routeProvider'];
    function AlinaConfig($routeProvider) {
        $routeProvider
            // .when('/', {
            //     templateUrl: 'view/index.html',
            //     controller: 'HomeController',
            //     directive: 'AlinaDirectives',
            //     service: 'AlinaServices'
            // })
            .when('/', {
                templateUrl: 'view/list.html',
                controller: 'EventListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    };
})();
