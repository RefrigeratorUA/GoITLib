(function () {
    'use strict';

    angular.module('Alina')
        .directive("gdNameBold", function () {
            return {
                link: function ($scope, element) {
                    element[0].innerHTML = "<b> Alina module </i>";
                }
            };
        });
    angular.module('Alina')
        .directive("gdNameItalic", function () {
            return {
                link: function ($scope, element) {
                    element[0].innerHTML = "<i> Alina module </i>";
                }
            };
        });
})();
