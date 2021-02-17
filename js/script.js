"use strict";

//! Старый методы!

const box = document.getElementById('box'); // старый метод
console.log(box);

const btns = document.getElementsByTagName('button'); // Получаем псевдомассив
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

//! Новые методы!

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
	console.log(item);
});
console.log(hearts);

const oneHeart = document.querySelector('div');
console.log(oneHeart);