function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error: Unknown operator";
    };
};

function getButtonValue(e){
    if(!isNaN(parseInt(this.innerText))){
        displayValue += this.innerText;
        resultDisplay.innerText = displayValue;
    } else if(this.innerText === '.'){
        if(!displayValue.includes('.')){
            displayValue += this.innerText;
            resultDisplay.innerText = displayValue;
        }
    }else{
        switch(this.innerText){
            case 'C':
                displayValue = '';
                resultDisplay.innerText = '';
        }

    };
};

let displayValue = "";
const resultDisplay = document.querySelector('#result-screen');
const allButtons = document.querySelectorAll('.calculator-button');
allButtons.forEach(button => {
    button.addEventListener('click', getButtonValue);
});