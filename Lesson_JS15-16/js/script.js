$(function() {
    'use strict';
    // (function(){
    //     function Human(params) {
    //         if (params) {
    //             this.name = params.name;
    //             this.age = params.age;
    //             this.sex = params.sex;
    //             this.height = params.height;
    //             this.weight = params.weight
    //         } else {
    //             this.name = "none";
    //             this.age = "none";
    //             this.sex = "none";
    //             this.height = "none";
    //             this.weight = "none"
    //         }
    //     };
    //     function Worker(place, pay) {
    //         this.place = place;
    //         this.pay = pay;
    //         this.shoots = function() {
    //             var nShoots = 30;
    //             for (var i = 0; i < nShoots; i++) {
    //                 this.pay += 10;
    //             }
    //             return this.pay;
    //         }
    //     };
    //     function Student(place, grant) {
    //         Human.apply(this, arguments);
    //         this.place = place;
    //         this.grant = grant;
    //         this.watchFilms = function() {
    //             var nFilms = 20;
    //             for (var i = 0; i < nFilms; i++) {
    //                 this.grant -= 8;
    //             }
    //             return this.grant;
    //         }
    //     };
    //
    //     Worker.prototype = new Human();
    //     Worker.prototype.constructor = Worker;
    //
    //     Student.prototype = new Human();
    //     Student.prototype.constructor = Student;
    //
    //     var manJack = {
    //         name: "Jack",
    //         age: 32,
    //         sex: "male",
    //         height: 175,
    //         weight: 62
    //     };
    //     var human = new Human(manJack);
    //
    //     var worker_1 = new Worker("US Army", 10000);
    //     worker_1.__proto__.name = "John";
    //     worker_1.__proto__.age = 40;
    //     Worker.prototype = human;
    //     var worker_2 = new Worker('Ukrainian Army', 150);
    //     var worker_3 = new Worker('Canadian Army', 8000);
    //
    //     var student_1 = new Student(manJack, 'oxford', 1000);
    //     Student.prototype = human;
    //     var student_2 = new Student('PTU', 20);
    //
    //     console.log('worker_1 :',worker_1);
    //     console.log('worker_2 :',worker_2);
    //     console.log('worker_3 :',worker_3);
    //
    //     console.log('student_1 :',student_1);
    //     console.log('student_2 :',student_2);
    //
    // })();

    var mainSearch = $('#search_1');
    var mainTopSearch = $('#search_2');

    mainSearch.one("input", function() {
        var mainTopVal = $(this).val();
        $('.main').hide();
        $(this).remove();
        $('.top_main').css({"display":"inherit"});
        mainTopSearch.val(mainTopVal).focus();
    });
    mainTopSearch.on("focus input", function() {
        var buff = $(this).val();
        $(this).val("");
        $(this).val(buff);
        //
        // function googleCallback(func, data) {
        //     alert("LOH!");
        //     window[func](data);
        // };
        // function processJSONP(data) {
        //     data = JSON.parse(data);
        //     return data;
        // };
        // $.ajax({
            // url: "https://www.googleapis.com/customsearch/v1?q="+buff+"&cx=006640253466900248042:clhywqfbqoi",
            // url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&cx=006640253466900248042:clhywqfbqoi&q=google",
            // url: "https://cse.google.com/?cx=006640253466900248042:clhywqfbqoi&q=" + buff,
            // data: buff,
            // crossDomain: true,
            // jsonp: false,
            // contentType: 'application/json',
            // type: 'GET',
        //     // header("Content-Type: text/javascript");
            // dataType: 'jsonp',
            // async: true,
            // jsonpCallback: 'processJSONP',
            // mimeType: 'text/javascript',
            // success: function(data, q, w) {
                // data = JSON.parse(data);
                // console.log('hi', data);
        //     },
        //     error: function(a, b, c) {
        //         console.log(a);
        //         console.log(b);
        //         console.log(c);
        //     }
        // });
        // (function() {
        //     var cx = '006640253466900248042:clhywqfbqoi';
        //     var gcse = document.createElement('script');
        //     gcse.type = 'text/javascript';
        //     gcse.async = false;
        //     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        //     var s = document.getElementsByTagName('script')[0];
        //     s.parentNode.insertBefore(gcse, s);
        //     console.log(s);
        // })();

    });


});
