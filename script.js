"use strict"

let screen = document.querySelector('.screen');


document.querySelector('.result').onclick = calculate;

screen.addEventListener('keydown', function(event){
	if (event.keyCode === 13 ) {
		calculate();
	}
});

function calculate(){

	let a = screen.value;
	if (typeof eval(a) == 'number'){
		screen.value = eval(a);
	}else{
		screen.value = '';
	}
};


let numberPad = document.querySelector('.calc');

numberPad.addEventListener("click", function (event){

	if(event.target.closest(".number")){

		let sign = event.target.textContent;

		screen.value += sign;
	}
});


let buttonClean = document.querySelector('.clear');

buttonClean.addEventListener('mousedown', function(event){
	deleteNumber();
} );

function deleteNumber(){
	screen.value = screen.value.slice(0, -1)
};


let plusMinus = document.querySelector('.plusminus');

plusMinus.onclick = inverse;

function inverse() {

	if (!isNaN(screen.value) ){
		if (+screen.value > 0){
			screen.value = '-' + screen.value
		} else {
			screen.value = screen.value.slice(1)
		}
	}
};



let memoryStorage = document.querySelector('.memory-storage');
let memoryLight = document.querySelector('.memory-light');

memoryStorage.onclick = memorySaveRead;



function memorySaveRead() {
	if(sessionStorage.getItem('memory') === null){
		sessionStorage.setItem('memory', screen.value);
		memoryLight.classList.add('active');

	} else {
		screen.value = sessionStorage.getItem('memory')
	}
};


if(sessionStorage.getItem('memory') !== null){
		memoryLight.classList.add('active');
	}

let memoryCleaner = document.querySelector('.memory-clean');

memoryCleaner.onclick = memoryClean;

function memoryClean() {
	sessionStorage.removeItem('memory');
	memoryLight.classList.remove('active');
}


// let memoryPlus = document.querySelector('.memory-plus');

// memoryPlus.onclick = memorySubtract;

// function memorySubtract() {
// 	if (!isNaN(screen.value) ){
// 		 let newValue = +sessionStorage.getItem('memory') + +screen.value;
// 		 sessionStorage.setItem('memory', newValue);
// 	}
// };



numberPad.addEventListener("click", function (event){

	if(event.target.closest(".memory-plus")){

		if (!isNaN(screen.value) ){
		 let newValue = +sessionStorage.getItem('memory') + +screen.value;
		 sessionStorage.setItem('memory', newValue);
		}
	}

	if(event.target.closest(".memory-minus")){

		if (!isNaN(screen.value) ){
		 let newValue = +sessionStorage.getItem('memory') - +screen.value;
		 sessionStorage.setItem('memory', newValue);
		}
	}
});

console.log(sessionStorage.getItem('memory'))