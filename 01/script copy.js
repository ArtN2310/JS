'use strict';

// if (2 * 4 == 7) {
//     console.log('true');
// } else {
//     console.log('false');
// }

let num = 50;
// (num == 50) ? console.log('true'): console.log('false');

switch (num) {
    case num < 49:
        console.log('false');
        break;
    case num > 100:
        console.log('false2');
        break;
    case num > 80:
        console.log('false3');
        break;
    case 50:
        console.log('trueeee');
        break;
    default: 
        console.log(num);
        break;
}

