$(function () {
    'use strict';

    function showIcons() {
        $('.icons').slideToggle();
    };

    $('.globe').on('click', showIcons);
});
