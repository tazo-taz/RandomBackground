const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


var a;



colorBtn.addEventListener('click',changeColor);

function changeColor() {
	let code = "#";
	for (let i = 0;i < 6; i++){
	
	let a = Math.floor(Math.random() * hex.length);
	code += hex[a];
	}
	body.style.backgroundColor = code;
}

const txt = document.querySelector('#text');
const click = document.querySelector('#click');
const body = document.querySelector('body');

