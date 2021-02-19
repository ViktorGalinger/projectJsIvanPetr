// touchstart - при возникновении касания по элементу
// touchmove - при касании по элементу, палец начинает двигаться
// touchend - как только палец оторвался от элемента, событие выполнилось
//	touchenter - срабатывает когда ведем пальцем по экрану на элемент, на который повешано событие
// touchleave - когда палец продолжил скользить за пределы
//	touchcancel - когда точка соприкосновения больше не регистр на поверхн,  серфим инет и палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded нужен, чтобы точно знали что все узлы DOM готовы!
	const box = document.querySelector('.box');
	// box.addEventListener('touchstart', (e) => {
	// 	e.preventDefault();

	// 	console.log('start');
	// 	console.log(e.touches);
	// });

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();
		console.log(e.targetTouches[0].pageX);
	});

	// box.addEventListener('touchend', (e) => {
	// 	e.preventDefault();
	// 	console.log('End');
	// });
});

//3 свойства: 
// touches - выдает список всех пальцев, которые взаимодействуют с экраном, не только с элементом!
// targetToches - список пальцев всех пальцев, которые взаимодействуют с конкретным элементом!
// changedTouches - список пальцев, которые участвуют в тек событии  