const btns = document.querySelectorAll("button"),
	overlay = document.querySelector(".overlay");

// btn.onclick = function () {
// 	alert('Click');
// };

let i = 0;
const deleteElement = (event) => {
	console.log(event.currentTarget);
	console.log(event.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// Отменяем стандартное поведение браузера

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});


const link = document.querySelector('a');
link.addEventListener('click', function (event) {
	event.preventDefault();

	console.log(event.target);
});