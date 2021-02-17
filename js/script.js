"use strict";

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHears = document.querySelector('.heart'),
	wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';

// box.style.cssText = 'background-color: blue; width: 500px;';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
// 	item.style.backgroundColor = 'blue';
// });

// Создание тега через JS
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я!');
div.classList.add('black');

wrapper.append(div); // Новый метод! вставляет элемент в конец дочерних у родителя
// wrapper.appendChild(div); // Старый метод!  вставляет элемент в конец дочерних у родителя

// wrapper.prepend(div);//Новый метод! вставляет элемент в начале дочерних у родителя

// hearts[0].before(div); Новый метод!
// hearts[0].after(div); Новый метод!

// wrapper.insertBefore(div, hearts[1]); // Старый метод! 

// circles[0].remove(); // Новый метод! удаляет элемент
// wrapper.removeChild(hearts[1]); // Старый метод удаления элемента!

// hearts[0].replaceWith(circles[0]); // Новый метод! Который меняем, на который меняем!
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = "Hello!";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');