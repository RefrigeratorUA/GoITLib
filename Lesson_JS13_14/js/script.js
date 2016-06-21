$(function() {
    'use strict';
    var question = {
        arrQuestions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3', 'Вопрос №4'],
        arrAnswers: [
            ['Вариант ответа №11', 'Вариант ответа №12', 'Вариант ответа №13', 'Вариант ответа №14'],
            ['Вариант ответа №21', 'Вариант ответа №22', 'Вариант ответа №23'],
            ['Вариант ответа №31', 'Вариант ответа №32'],
            ['Вариант ответа №41', 'Вариант ответа №42', 'Вариант ответа №43']
        ],
        arrCorrectAnsw: [
            ['Вариант ответа №13'],
            ['Вариант ответа №21'],
            ['Вариант ответа №32'],
            ['Вариант ответа №43']
        ]
    };
    localStorage.setItem('questions', JSON.stringify(question));
    var loadData = localStorage.getItem('questions');
    try {
        var test = JSON.parse(loadData);
    } catch (error) {
        console.log('Error data! Try later.', error);
    }
    for (var i=0; i<test.arrQuestions.length; i++) {
        console.log("Правильный ответ на Вопрос №" + (i+1) + ": ", test.arrCorrectAnsw[i][0]);
    };
    // var test = question;  //для IE (локально)
    var $letsGo = function() {

    var tmp = $('#goTest').html();
    for (var j=0; j<test.arrQuestions.length; j++) {
        var arr = test.arrAnswers[j];
        // console.log('Array = ', arr);
        // console.log(test.arrAnswers[j]);
        var randArr = [];
        var i = 0;
        while (arr.length!=0) {
            var randItem = Math.floor(Math.random()*arr.length);
            // console.log(i + '-й randItem =', randItem);
            randArr[i] = arr[randItem];
            // console.log('randArr[' + i +'] =', randArr[i]);
            arr.splice(randItem, 1);
            // console.log('arr.length = ', arr.length);
            // console.log('arr ', arr);
            i++;
        }
        test.arrAnswers[j] = randArr;
        // console.log('New Array = ', randArr);
    };

    var content = tmpl(tmp, test);
    $('body').append(content);

    var $submit = $('input[type="button"]');

    $submit.one('click', function() {
        $submit.attr("value", "Проверяем...");
        var $labels = [];
        var count = 0;
        for (var i=0; i<test.arrQuestions.length; i++) {
            for (var j=0; j<test.arrAnswers[i].length; j++) {
                var idText = "answer_" + (i+1) + "_" + (j+1);
                var $varsAnswers = $("input#" + idText + ".check-style:checked");
                if ($varsAnswers.length > 0) {
                    $labels[count] = $("label[for=" + idText + "]");
                    count++;
                };
            };
        };
        var $result = [];
        var $resInfo = {
            data : []
        };
        for (var i=0; i<test.arrQuestions.length; i++) {
            // console.log("Правильный ответ на Вопрос №" + (i+1) + ": ", test.arrCorrectAnsw[i][0]);
            count=0;
            var n = 0;
            while (count<$labels.length && $result[i]!="error") {
                var numQuestion = +$labels[count].attr("for")[7];
                if ((numQuestion-1) == i) {
                    n++;
                    if (n>1) {
                        $result[i] = "error";
                        $resInfo.data[i] = "На вопрос выбрано больше одного ответа. Ошибка!";
                        // console.log($resInfo.data[i]);
                    } else {
                        if (test.arrCorrectAnsw[i][0] == $labels[count].html()) {
                            $result[i] = "correct";
                            $resInfo.data[i] = "Верный ответ. Поздравляем!";
                            // console.log($resInfo.data[i]);
                        }
                    }
                }
                count++;
            };
            if ($result[i]!="error" && $result[i]!="correct") {
                $result[i] = "error";
                $resInfo.data[i] = "На вопрос не выбран ответ, либо ответ неверный. Ошибка!";
                // console.log($resInfo.data[i]);
            }
        };
        var $progress = 0;
        for (var i=0; i<$result.length; i++) {
            if ($result[i] == "correct") {
                $progress++;
            }
        };
        if ($result.length!=0) {
            $progress = Math.round(($progress / $result.length) * 100);
        }

    if ($progress > 50) {
        $("#overlay").css({"background-color":"green"});
    };
    $('#overlay').fadeIn(400,
        function() {
            $('#modal')
                .css('display', 'block')
                .animate({opacity: 1, top: '15%'}, 200);
                for (var i=0; i<$result.length; i++) {
                    $('#modal').append("<i>" + (i+1) + ". " + test.arrQuestions[i] + ":</i>" +
                                       "<p>  " +  $resInfo.data[i] + "</p>" +
                                       "<br>");
                }
                $('#modal').append("<b>Ваш результат - " + $progress + "%</b>" + "<br>");
                if ($progress > 50) {
                    $("#modal b").css({"color":"green"});
                };
        });
    }); //End SUBMIT
    var $close = $('#modal_close');
        $close.one('click', function() {
        // event.preventDefault();
        $('#modal')
            .animate({opacity: 0, top: '5%'}, 200,
                function() {
                    $(this).css('display', 'none');
                    $("#overlay").removeAttr("style");
                    $('#overlay').fadeOut(400);
                    $('#modal i, p, br, b').remove();
                }
            );
        // $("input[type=checkbox]").attr("checked", false);
        $('.container').remove();
        $('#modal').remove();
        $('#overlay').remove();
        $letsGo();
    });
    };
    $letsGo();
});
