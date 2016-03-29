var divContainer = document.createElement('div');
divContainer.classList.add('container');
divContainer.classList.add('center');

var h4 = document.createElement('h4');
h4.innerHTML = 'Тест по программированию';
divContainer.appendChild(h4);

var question = {
    arrQuestions: ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'],
    arrAnswers: [
        ['Вариант ответа №11', 'Вариант ответа №12', 'Вариант ответа №13', 'Вариант ответа №14'],
        ['Вариант ответа №21', 'Вариант ответа №22', 'Вариант ответа №23'],
        ['Вариант ответа №31', 'Вариант ответа №32']
    ]
}

var numQuestion = question.arrQuestions.length; //Количество вопросов
// var numQuestion = NaN; //Количество вопросов

if ((typeof numQuestion === 'number') && (!isNaN(numQuestion)) && (numQuestion > 0)) {

    var formTest = document.createElement('form');
    formTest.setAttribute('role', 'form');
    formTest.setAttribute('action', '#');
    formTest.setAttribute('method', 'post');
    divContainer.appendChild(formTest);


    for (var i = 0; i < numQuestion; i++) {
        var formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        formGroup.classList.add('left');
        formTest.appendChild(formGroup);

        var textQuestion = document.createElement('h4');
        textQuestion.innerHTML = (i + 1) + '. ' + question.arrQuestions[i];
        formGroup.appendChild(textQuestion);
        for (var j = 0; j < question.arrAnswers[i].length; j++) {

            var varAnswersDiv = document.createElement('div');
            varAnswersDiv.classList.add('checkbox');
            formGroup.appendChild(varAnswersDiv);

            var checkAnswers = document.createElement('input');
            checkAnswers.setAttribute('type', 'checkbox');
            checkAnswers.classList.add('check-style');
            checkAnswers.setAttribute('id', 'answer_' + (i + 1) + '_' + (j + 1));
            varAnswersDiv.appendChild(checkAnswers);

            var checkAnswersLabel = document.createElement('label');
            checkAnswersLabel.setAttribute('for', checkAnswers.getAttribute('id'));
            checkAnswersLabel.innerHTML = question.arrAnswers[i][j];
            varAnswersDiv.appendChild(checkAnswersLabel);
        }
    }

    var submitTest = document.createElement('input');
    submitTest.setAttribute('type', 'submit');
    submitTest.setAttribute('name', 'checkres');
    submitTest.setAttribute('value', 'Проверить мои результаты');
    formTest.appendChild(submitTest);

} else {
    var h3 = document.createElement('h3');
    h3.innerHTML = 'Тест по программированию не доступен';
    divContainer.appendChild(h3);
}
document.body.appendChild(divContainer);
