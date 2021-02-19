const btns = document.querySelectorAll('button'),
	wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // указывает сколько классов используется у данного элемента
// console.log(btns[0].classList.item(0)); // Метод item - который распологается под определенным индексом
// console.log(btns[1].classList.add('red', 'black')); // Метод add - добавляет класс элементу
// console.log(btns[0].classList.remove('blue')); // Метод remove - удаляет класс у элемента
// console.log(btns[0].classList.toggle('blue')); // Метод toggle - Если есть класс, будет убран и наоборот

// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

btns[0].addEventListener('click', () => {
	// if (!btns[1].classList.contains('red')) {
	// 	btns[1].classList.add('red');
	// } else {
	// 	btns[1].classList.remove('red');
	// }
	btns[1].classList.toggle('red');
});

// wrapper.addEventListener('click', (event) => {
// 	if (event.target && event.target.tagName == "BUTTON") {
// 		console.log('Hello!');
// 	}
// });

btns.forEach(btn => {
	btn.addEventListener('click', () => {
		console.log('hello!');
	});
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);