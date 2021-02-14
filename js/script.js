"use strict";

function showFirstMessage(text) {
	console.log(text);
}

showFirstMessage("Hello World!  ");

/* function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));
 */
function ret() {
	let num = 50;

	//

	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const calc = (a, b) => {
	console.log('a');
	return a + b;
};