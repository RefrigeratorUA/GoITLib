// ЧАСТЬ 1. Степень числа

var number = prompt('Введите число (основание степени):', 0);
console.log('Input Number:', number);
var degrees = prompt('Введите степень числа (показатель степени):', 0);
console.log('Input Degrees:', degrees);
var result = pow(number, degrees);

function pow(number, degrees) {
    var a = +number;
    var n = +degrees;
    var res;
    console.log('What A:', a);
    console.log('What N:', n);
    if (((typeof a === 'number') && (!isNaN(a))) && ((typeof n === 'number') && (!isNaN(n)))) {
        if ((a == 0) && (n < 0)) {
            alert('ERROR!!! Divizion By Zero!');
            return res = 'ERROR!!! Divizion By Zero!';
        } else {
            if (a == 0) {
                return res = 0;
            }
            if (n == 0) {
                return res = 1;
            }
            if (n == 1) {
                return res = a;
            }

            var roundN = n;

            if ((roundN < 0)) {
                roundN *= -1;
            }

            roundN = Math.floor(roundN);
            res = a;

            for (var i = 1; i < roundN; i++) {
                res = res * a;
            }

            if ((n < 0)) {
                res = 1 / res;
            }
            console.log('RESULT', res);
            return res;
        }
    } else {
        return res = 'Основание степени или Показатель степени не число!';
    }
}

// ЧАСТЬ 2. Ищем юзера

var arrNames = [];
arrNames.length = 5;

for (var i = 0; i < arrNames.length; i++) {
    arrNames[i] = prompt('Введите ' + (i + 1) + '-е ( из ' + arrNames.length + ' ) имя в массиве:');
    console.log('Name[' + i + '] =', arrNames[i]);
}
var searchName = prompt('Введите имя пользователя, для поиска в массиве:');
console.log('User Name =', searchName);

var flag = true;
var i = 0;
while ((i < arrNames.length) && flag) {
    if (arrNames[i] == searchName) {
        alert(arrNames[i] + ', вы успешно вошли!');
        flag = false;
    }
    i++;
}
if (flag) {
    alert('ERROR! User not found.');
    console.log('FLAG =', flag);
}
