"use strict";


//! to String
// 1)
console.log(typeof (String(null))); // string
console.log(typeof (String(4))); // string
// 2)
console.log(typeof (null + '')); //string

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//! To Number 
// 1)
console.log(typeof (Number(4))); // number
// 2)
console.log(typeof (+'5')); // number
// 3)
console.log(typeof (parseInt("15px", 10)));  // number

let answ = +prompt('Hello!', ''); // Number

//! To Boolean 
/* 0, '', null, undefined, NaN --- False */

let switcher = null;
if (switcher) {
	console.log('working...');
}
switcher = 1;
if (switcher) {
	console.log('working...');
}
// 2)
console.log(typeof (Boolean('4'))); // Boolean
// 3)
console.log(typeof (!!'4')); // True