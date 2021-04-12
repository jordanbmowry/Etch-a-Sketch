const mainContainer = document.querySelector('#main-container');

for (let i = 1; i < 257; i++) {
	const div = document.createElement('div');
	div.classList.add(`div`);
	div.setAttribute('id', `div-${i}`);
	mainContainer.append(div);
}

const divs = document.querySelectorAll('.div');

for (div of divs) {
	div.addEventListener('mouseenter', function (e) {
		e.target.setAttribute('class', 'color-change');
	});
}
