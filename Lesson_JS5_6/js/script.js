var content = document.querySelector('.content');
var divCounterMsec = document.createElement('div');
var divCounterSec = document.createElement('div');
var divCounterMin = document.createElement('div');
var divCounterHour = document.createElement('div');


function addZero(x, n) {
    while (x.toString().length < n) {
        x = '0' + x;
    }
    return x;
}
function counterMsec() {
    var MILLISECONDS_START = start;
    var MILLISECONDS_NOW = new Date();
    var ms = MILLISECONDS_NOW - MILLISECONDS_START;
    var sec = Math.floor(ms / 1000);
    var min = Math.floor(sec / 60);
    var hour = Math.floor(min / 60);
    ms = ms % 1000;
    if (sec >= 60) {
        sec = sec - (60 * min);
        if (min >= 60) {
            min = min - (60 * hour);
            if (hour >= 24) {
                alert('Поздравляем! Вы прое..ли сутки!');
                clearInterval(count);
                ms = 0;
                sec = 0;
                min = 0;
                hour = 0;
            }
        }
    }
    divCounterMsec.innerHTML = 'msec : ' + addZero(ms, 3);
    divCounterSec.innerHTML = 'sec : ' + addZero(sec, 2);
    divCounterMin.innerHTML = 'min : ' + addZero(min, 2);
    divCounterHour.innerHTML = 'hour : ' + addZero(hour, 2);
}
alert('GO!');
var start = new Date();
var count = setInterval(counterMsec, 1);

content.appendChild(divCounterHour);
content.appendChild(divCounterMin);
content.appendChild(divCounterSec);
content.appendChild(divCounterMsec);
