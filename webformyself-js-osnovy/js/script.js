'use strict';

// Таблица пифагора
let pifagor = '<table><tbody>';
for (let i = 1; i < 10; i++) {
    if (i == 1) {
        pifagor += "<tr style='color: red; font-weight: 700;'>";
        for (let j = 1; j < 10; j++) {
            pifagor += '<td>';
            if (j == 1) {
                pifagor += ' ';
            } else {
                pifagor += i * j;
            }
            pifagor += '</td>';
        }
        pifagor += '</tr>';
    } else {
        pifagor += '<tr>';
        for (let j = 1; j < 10; j++) {
            if (j == 1) {
                pifagor += "<td style='color: red; font-weight: 700;'>";
                pifagor += i * j;
                pifagor += '</td>';
            } else {
                pifagor += '<td>';
                pifagor += i * j;
                pifagor += '</td>';
            }
        }
        pifagor += '</tr>';
    }
}
pifagor += '</tbody></table>';

document.getElementsByTagName('div')[0].innerHTML += pifagor;

// Функции
(function (param1, param2) {
    let res = param1 * param2;
    document.getElementsByTagName('span')[0].innerHTML = res;
})(10, 6);

let f = function fact(param1) {
    if (param1 <= 1) {
        return 1;
    }
    return param1 * fact(param1 - 1);
};
console.log(f(4));

//Массивы
