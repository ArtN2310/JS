'use strict';

let money = +prompt('Ваш бюджет на месяц?', '0');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
};


// for (let i = 0; i < 2; i++) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = +prompt('Во сколько обойдется?');

//     if (typeof (a) === 'string' && typeof (b) != null && typeof (a) != null &&
//         a != '' && b != '' && a.length < 50) {

//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     }
// };

appData.moneyPerDay = appData.budget / 30;
alert('Ваш бюджет в день: ' + appData.moneyPerDay);

switch (true) {
    case appData.moneyPerDay < 100:
        console.log('Минимальный уровень достатка');
        break;
    case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
        console.log('Средний уровень достатка');
        break;
    case appData.moneyPerDay > 2000:
        console.log('Высокий уровень достатка');
        break;
    default: 
        console.log('Ошибка');
        break;
}

console.log(appData.moneyPerDay);