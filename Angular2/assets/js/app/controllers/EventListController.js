(function () {
    'use strict';

    angular.module('Alina')
        .controller('EventListController', EventListController);

    EventListController.$inject = ['$scope'];
    function EventListController($scope) {
        $scope.userGroup.events = [
                {name: "AngularJS", descr: "Talk about AngularJS"},
                {name: "HTML5", descr: "Talk about HTML5"},
                {name: "CSS3", descr: "Talk about CSS3"},
                {name: "JavaScript", descr: "Talk about JavaScript"},
                {name: "jQuery", descr: "Talk about jQuery"}
            ]

        $scope.notify = function (description) {
            alert(description);
        };
    }
})();
