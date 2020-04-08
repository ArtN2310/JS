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


// console.log(4 / 0);
// console.log('string' * 9);


// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// person.name = 'Alex';
// console.log(person.name);

// let arr =['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// //alert('Hello!');
// // let answer = confirm('Are you here?');
// // console.log(answer);
// let answer = +prompt('18 есть?', 'Да');
// console.log(answer);
let incr = 10,
    decr = 10;


console.log(++incr);
console.log(decr--);
console.log(5%1);
console.log('2' || 2);

let isChecked = true,
    isClose = false;

console.log(isChecked || isClose);