"use strict";

/* let str = "Viktor";

console.log(str.toUpperCase()); //VIKTOR
console.log(str.length); //6

const fruit = "Some fruit";
console.log(fruit.indexOf("u")); //7 */

/* const logg = " Hello world";
console.log(logg.slice(7, 12)); //world  (11-до какого момента не включается!)
console.log(logg.substring(7, 12)); // world
console.log(logg.substr(7, 5)); // 1аргумент  - с какого символа, 2 аргумент - сколько символов.  */

const num = 12.2;
console.log(Math.round(num)); //округляется до ближайшего целого

const test = "12.2px";
console.log(parseInt(test)); // Обрезается все, что после целого числа
console.log(parseFloat(test)); // Обрезается все, что после числа с плавающей точкой