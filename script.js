const mainContainer = document.querySelector('main');
const resetButton = document.querySelector('#reset');

for (let i = 1; i < 257; i++) {
	let div = document.createElement('div');
	div.classList.add(`div`);
	div.setAttribute('id', `div-${i}`);
	mainContainer.append(div);
}
colorBoxes();
function colorBoxes() {
	let divs = document.querySelectorAll('.div');
	for (div of divs) {
		div.addEventListener('mouseenter', function (e) {
			e.target.setAttribute('class', 'color-change');
		});
	}
}

function promptToResetGrid() {
	let gridQuares = +prompt('Select how many squares per side');
	if (gridQuares > 100 || gridQuares < 1) {
		alert('Make a selection less less than 100 but over 0');
	} else if (Number.isNaN(gridQuares)) {
		alert('Select a number!');
	} else {
		resetGrid(gridQuares);
	}
}

function resetGrid(userInput) {
	mainContainer.removeAttribute('id');
	mainContainer.style.cssText = `
	grid-template-columns: repeat(${userInput}, 1fr);
	grid-template-rows: repeat(${userInput}, 1fr);
	grid-auto-flow: dense;
	`;
	divs = document.querySelectorAll('div');
	for (div of divs) {
		mainContainer.removeChild(div);
	}

	for (let i = 1; i < `${userInput * userInput + 1}`; i++) {
		let div = document.createElement('div');
		div.classList.add(`div`);
		div.setAttribute('id', `div-${i}`);
		mainContainer.append(div);
	}
	colorBoxes();
}

resetButton.addEventListener('click', promptToResetGrid);
