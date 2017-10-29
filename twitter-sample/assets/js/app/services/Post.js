(function () {
    'use strict';

    angular.module('Twitter')
        .factory('Post', Post);

    Post.$inject = ['$resource'];
    function Post($resource) {
        return $resource('/post/:id', {id: '@id'});
    }
})();
