(function () {
    'use strict';

    angular.module('Alina')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'peopleCalculator'];
    function HomeController($scope, peopleCalculator) {
        $scope.userGroup = {
            name: "Alina Shalena"
        };
        $scope.peopleHere = 0;
        $scope.$watch("peopleHere", function (val) {
            $scope.peopleDiscription = peopleCalculator.calcPeople(val);
        });

    }
})();
