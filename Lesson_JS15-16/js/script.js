$(function() {
    'use strict';
    // (function(){
    //     function Human(name, age, sex, height, weight) {
    //         this.name = name,
    //         this.age = age,
    //         this.sex = sex,
    //         this.height = height,
    //         this.weight = weight
    //     };
    //
    //     var man = new Human('Jack', 32, 'male', 175, 62);
    //
    //     function Worker(place, pay) {
    //         this.place = place,
    //         this.pay = pay,
    //         this.shoots = function() {
    //             var nShoots = 30;
    //             for (var i = 0; i < nShoots; i++) {
    //                 this.pay += 10;
    //             }
    //             return this.pay;
    //         }
    //     };
    //     function Student(place, grant) {
    //         this.place = place,
    //         this.grant = grant,
    //         this.watchFilms = function() {
    //             var nFilms = 20;
    //             for (var i = 0; i < nFilms; i++) {
    //                 this.grant -= 8;
    //             }
    //             return this.grant;
    //         }
    //     };
    //
    //     Worker.prototype = man;
    //     Student.prototype = man;
    //
    //     var worker_1 = new Worker('US Army', 10000);
    //     var worker_2 = new Worker('Ukrainian Army', 150);
    //     var student_1 = new Student('oxford', 1000);
    //     var student_2 = new Student('PTU', 20);
    //
    //     for (var key in worker_1) {
    //         console.log('worker_1 [' + key + '] = ' + worker_1[key]);
    //     }
    //
    //     console.log('Worker_2 :',worker_2);
    //     console.log('Student_1 :',student_1);
    //
    //     for (var key in student_2) {
    //         console.log('student_2 [' + key + '] = ' + student_2[key]);
    //     }
    //
    // })();

    var $mainSearch = $('#search_1');
    var $mainTopSearch = $('#search_2');

    $mainSearch.one("input", function() {
        var $mainTopVal = $(this).val();
        $('.main').hide();
        $(this).remove();
        $('.top_main').css({"display":"inherit"});
        $mainTopSearch.val("").focus().val($mainTopVal);
    });
    $mainTopSearch.on("focus input", function() {
        console.log($(this).val());
    });
});
