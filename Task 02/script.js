'use strict';

let money = prompt('Ваш бюджет на месяц?', '0');
let time  = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget : money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = +prompt('Во сколько обойдется?'),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = +prompt('Во сколько обойдется?');
appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert('Ваш бюджет в день: ' + appData.budget/30);
// while (num < 55) {
//     console.log(num);
//     num++;
// }
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i =1; i<10; i++){
    console.log(i);
}