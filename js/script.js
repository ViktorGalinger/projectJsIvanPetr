"use strict";

/* const arr = [1, 2, 3, 6, 8];

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* arr.pop(); */
/* arr.push(10); */

/* console.log(arr); */

/* for (let i = 0; i < arr.length; i++) { // Перебор через обычный цикл
	console.log(arr[i]);
}

for (let value of arr) { // Перебор через метод For Of
	console.log(value);
} */

const str = prompt("", "");
const produtcs = str.split(", ");
produtcs.sort();
console.log(produtcs.join('; '));