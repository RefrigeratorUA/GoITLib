var content = document.querySelector('.content');

var mSeconds = '000';
var Seconds = '00';
var Minutes = '00';
var Hours = '00';

var divCounterMsec = document.createElement('div');
var divCounterSec = document.createElement('div');
var divCounterMin = document.createElement('div');
var divCounterHour = document.createElement('div');

divCounterHour.innerHTML = 'Hours : ' + Hours;
divCounterMin.innerHTML = 'Minutes : ' + Minutes;
divCounterSec.innerHTML = 'Seconds : ' + Seconds;
divCounterMsec.innerHTML = 'mSeconds : ' + mSeconds;

var PauseDate = 0;
var clearFlag = false;

var buttonStartPause = document.createElement('input');
buttonStartPause.type = 'button';
buttonStartPause.value = 'Start!';
buttonStartPause.onclick = StartPause;

var buttonClear = document.createElement('input');
buttonClear.type = 'button';
buttonClear.value = 'Clear!';
buttonClear.onclick = clearTimer;

function StartPause() {
    function addZero(x, n) {
        while (x.toString().length < n) {
            x = '0' + x;
        }
        return x;
    }
    function counterMsec() {
        var MILLISECONDS_START = start;
        var MILLISECONDS_NOW = new Date();
        var ms = MILLISECONDS_NOW - MILLISECONDS_START + PauseDate;
        var res = new Date(ms);

        function clear(stop) {
            var stop = count;
            clearInterval(stop);
            if (!clearFlag) {
                buttonStartPause.value = 'Continue...';
                buttonStartPause.onclick = StartPause;
                PauseDate = ms;
            }
        }
        function fullClear(stop) {
            var stop = count;
            clearInterval(stop);
            buttonStartPause.value = 'Start!';
            buttonStartPause.onclick = StartPause;
            clearTimer();
            ms = 0;
            PauseDate = ms;
        }

        buttonStartPause.onclick = clear;
        buttonClear.onclick = fullClear;


        divCounterMsec.innerHTML = 'mSeconds : ' + addZero(res.getMilliseconds(), 3);
        divCounterSec.innerHTML = 'Seconds : ' + addZero(res.getUTCSeconds(), 2);
        divCounterMin.innerHTML = 'Minutes : ' + addZero(res.getUTCMinutes(), 2);
        divCounterHour.innerHTML = 'Hours : ' + addZero(res.getUTCHours(), 2);
    }

    var start = new Date();
    if (!clearFlag) {
        buttonStartPause.value = 'Pause ||';
        var count = setInterval(counterMsec, 1);
    } else {
        buttonStartPause.value = 'Start!';
        divCounterHour.innerHTML = 'Hours : ' + Hours;
        divCounterMin.innerHTML = 'Minutes : ' + Minutes;
        divCounterSec.innerHTML = 'Seconds : ' + Seconds;
        divCounterMsec.innerHTML = 'mSeconds : ' + mSeconds;
        clearFlag = false;
    }
}

function clearTimer() {
    clearFlag = true;
    buttonClear.onclick = clearTimer;
    StartPause();
}


content.appendChild(divCounterHour);
content.appendChild(divCounterMin);
content.appendChild(divCounterSec);
content.appendChild(divCounterMsec);

content.appendChild(buttonStartPause);
content.appendChild(buttonClear);
