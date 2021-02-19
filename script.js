// console.log(document.documentElement);

//! Узлы!

// console.log(document.body.childNodes); // Показывает всех дочерних узлов у body
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector("#current").parentNode); // Получить родителя(узел)
// console.log(document.querySelector("#current").parentNode.parentNode); // Получить родителя - родителя(узел)
// console.log(document.querySelector('[data-current="3"]').nextSibling); // Получаем следующий за ним элемент(узел)
// console.log(document.querySelector('[data-current="3"]').previousSibling); // Получаем предыдущий за ним элемент(узел)

//! Элементы!

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Получаем следующий за ним элемент(не узел)
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // Получаем предыдущий за ним элемент(не узел)
// console.log(document.querySelector("#current").parentElement); // Получить элемент родителя(не узел!) 
// console.log(document.body.firstElementChild); // Получаем элемент первого ребенка!
// console.log(document.body.lastElementChild); // Получаем элемент последнего ребенка!

for (let node of document.body.childNodes) { // получаем все дочерние элементы, игнорируя текстовые ноды!
	if (node.nodeName == '#text') {
		continue;
	}
	console.log(node);
}