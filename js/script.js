"use strict";

const solider = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log("Hello!");
	}
};

/* jonh.__proto__ = solider;	// ((Устаревший формат)) Установили прототипом(родителем)Джона - солдата!
console.log(jonh);  //Прототипом получил свойства своего прототипа/родителя 	 */

const jonh = Object.create(solider); // Мы создаем новый прототип Джон, который будет прототипно наследоваться от Солдата!
Object.setPrototypeOf(jonh, solider); // 1арг - объект, которому назначить прототип, 2арг - объект, прототип которого устанавливаем!

jonh.sayHello();