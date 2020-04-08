'use strict';


let num = 40;
// (num == 50) ? console.log('true'): console.log('false');

switch (true) {
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

