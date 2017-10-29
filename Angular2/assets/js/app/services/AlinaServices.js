(function () {
    'use strict';

    angular.module('Alina')
        .service("peopleCalculator", function () {
            return {
                calcPeople: function (val) {
                    if (val<0) {
                        return "Ты гонишь!";
                    };
                    if (val<5) {
                        return "Bad :-(";
                    };
                    if (val<10) {
                        return "Norm :-|";
                    };
                    if (val<15) {
                        return "Good :-)";
                    };
                    return "Very Good :-))";
                }
            };
        });
})();
