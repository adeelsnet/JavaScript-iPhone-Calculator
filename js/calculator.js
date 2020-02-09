// Defines that JavaScript code should be executed in "strict mode".
"use strict";

const clearKey = document.querySelector('.clear');
const decimalKey =  document.querySelector('.decimal');
const calculatorDisplay = document.querySelector('.calculatorDisplay');
const numberKeys = document.querySelectorAll('.num');
const negativeKey = document.querySelector('.negative');
const actionKeys = document.querySelectorAll('.action');

let firstValue ='';
let operator = '';
let secondValue ='';
let calculationValue;

clearKey.addEventListener('click', e => {
	console.log('Clear calculator');	
	resetCalculator();
});

decimalKey.addEventListener('click', e => {
	console.log('Decimal clicked');	
	if(!getCurrentValue().includes('.')) {
		displayValue('.');
	}
});

negativeKey.addEventListener('click', e => {
	console.log('negative clicked');	
	
	let valueSplit = getCurrentValue().split('-');
	
	if(valueSplit.length === 1) {
		calculatorDisplay.innerHTML = ('-' + valueSplit);		
	} else {
		calculatorDisplay.innerHTML = valueSplit[1];
	}
	
	setValues(calculatorDisplay.innerHTML);
});

numberKeys.forEach(function(num) {
	num.addEventListener('click', e => {
		let currentValue =  e.srcElement.innerHTML;
		
		displayValue(currentValue);
		
		setValues(getCurrentValue());
	})
});

actionKeys.forEach(function(action) {
	action.addEventListener('click', e => {
		let actionValue = e.srcElement.innerHTML;
		console.log("action is ", actionValue);
		calculatorDisplay.innerHTML = '0';
		
		operator = actionValue;
	});
});

document.querySelector('.equals').addEventListener('click', e => {	
	if(firstValue !== '' && operator !== '' && secondValue !== '') {
		let answer =  calculate(firstValue, operator, secondValue);
		calculatorDisplay.innerHTML = answer;
		storeAnswer = answer;
		console.log(firstValue, operator, secondValue, ' = ' , answer);
	}
});

function setValues(value) {
	if(operator === '' && secondValue === '' ) {
			firstValue = value;		
			console.log('setting first value to: ',  firstValue);				
		} else 	{	
			secondValue = value;
			console.log('setting second value to: ', secondValue);			
		} 
};

function calculate (n1, operator, n2) {	
	let firstNum = parseFloat(n1);
  	let secondNum = parseFloat(n2);
	
	switch(operator) {
		case '+':
			return firstNum + secondNum;
		case '-':
			return firstNum - secondNum;
		case  'x':
			return firstNum * secondNum;
		case  '÷':
			return firstNum / secondNum;
		case  '%':
			return firstNum % secondNum;
	}
}

function resetCalculator() {
	firstValue = '';
	operator = '';
	secondValue = '';
	calculationValue = 0;
	calculatorDisplay.innerHTML = '0';
}

function displayValue(num) {
	let currentValue = getCurrentValue();
	// Remove leading 0
	let newValue = currentValue.replace(/^0+/, '') + num;
	// Set the display value
	calculatorDisplay.innerHTML = newValue;
};

function getCurrentValue() {
	return calculatorDisplay.innerHTML;
};

function storeAnswer(value) {
	calculationValue = value;
};


