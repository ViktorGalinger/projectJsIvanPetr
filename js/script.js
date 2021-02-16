"use strict";

/* let a = 5,
	b = a;

b = b + 5;

const obj = {
	a: 5,
	b: 1
}; */

/* const copy = obj; //* Не копирует структуру объекта, а передает ссылку!!!
copy.a = 10;

console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
	let objCopy = {};

	for (let key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers); */


/* const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const add = {
	d: 17,
	e: 20 
}; */

/* console.log(Object.assign(number, add)); */
/* const clone = Object.assign({}, add);

clone.d = 20;

console.log(add); //20
console.log(clone); //20
 */

/* const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sadasdasd';

console.log(newArray); // ["a", "sadasdasd", "c"]
console.log(oldArray); // ["a", "b", "c"] */


/* Спрет оператор разворачивает все свойства массива */
const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejornal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2, 5, 7]; //  С него нужно получить свойства и ввести их в качестве аргументы в функции выше!

log(...num); // 2, 5, 7


// 4й способ создания поверхностой копии объекта

const array = ['a', 'b'];
const newArray = [...array];
console.log(newArray); // ["a", "b"]
console.log(array); // ["a", "b"]

const q = {
	one: 1,
	two: 2
};
const newObj = { ...q };
console.log(newObj); // {one: 1, two: 2}
console.log(q); //{one: 1, two: 2}