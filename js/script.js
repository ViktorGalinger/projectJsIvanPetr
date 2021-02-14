"use strict";

/* function first() {
	// Do domething
	setTimeout(function () {
		console.log(1);
	}, 500);
}

function second() {
	console.log(2);
}

first();
second(); */

function learnJS(lang, callback) { // 1 этап
	console.log(`Я учу ${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок!'); // 2 этап
}

learnJS('Java Script', done); // 3 этап
