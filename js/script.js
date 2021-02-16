"use strict";

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('test');
	}
};

options.makeTest();

const { border, bg } = options.colors; // Деструктиризация

/* console.log(options);

let counter = 0; // Переменная для счетчика

for (let key in options) { // Перебрать все свойства/значения объекта а также значения
	if (typeof (options[key]) === 'object') { // перебрать все свойства/значения объекта в объекте
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  //перебрать все свойства/значения объекта в объек
			counter++; // Посчитаем количество свойств
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++; // Посчитаем количество свойств в объекте Будет 3.
	}
}

for (let key in options) { // Классческий метод проверить кол-во св-в в объекте
	counter++;
}

console.log(counter); */

//! Свойства и методы объектов

/* console.log(Object.keys(options).length); // Берет объект и на его основании создает массив, в котором все элементы*/