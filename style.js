// import { string } from "prop-types";
// import { forEach } from "async";

// console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

let myNum = 10;

let myStr = 'строка';

let myBool= true;

let myArr =  [1,2,3,4,5,];

let myObj = { first: 'First Name', last: 'Last Name'};

let decimal2 = myNum/1000;


let i;
i++;
++i;
i--;
--i;

let myTest=20;
myTest+=20;
myTest-=20;
myTest*=20;
myTest/=20;
myTest%=20;


let decimal2 = myNum.toFixed(2);

let myPi = Math.PI;
console.log(myPi);

let myRound = 89.279; 
myRound=Math.round(myRound);
console.log(myRound);

let myRandom = Math.round(Math.random()*10);
console.log(myRandom);

var myPow = Math.pow(3, 5); 
console.log( myPow);

let strObj ={

}
strObj.str = "Мама мыла раму, рама мыла маму";
strObj['length'] = strObj.str.length;

let isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);

let strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

console.log(strReplace.toLowerCase());
console.log(strReplace.toUpperCase());
