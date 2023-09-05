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
            if(num2 === 0){
                return 'Bruh';
            } else {
                return divide(num1, num2);
            };
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
        num2 = parseFloat(displayValue);
        switch(this.innerText){
            case 'C':
                displayValue = '';
                resultDisplay.innerText = '';
                num2 = NaN;
                break;
            case 'AC':
                displayValue = '';
                resultDisplay.innerText = '';
                num1 = NaN;
                num2 = NaN;
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                
                if(operator === '='){
                    operator = this.innerText;
                    num2 = parseFloat(displayValue);
                    displayValue = '';
                    break;
                }
                
                if(!isNaN(num1) && !isNaN(num2)){
                    num1 = operate(num1, operator, num2);
                    resultDisplay.innerText = num1;
                    displayValue = '';
                    num2 = NaN;
                    operator = this.innerText;
                }else if(!isNaN(num1)){
                    num2 = parseFloat(displayValue);
                    //num1 = operate(num1, operator, num2);
                    //displayValue = '';
                    //num2 = NaN;
                    operator = this.innerText;
                }else{
                    operator = this.innerText;
                    num1 = parseFloat(displayValue);
                    displayValue = '';
                }
                break;
            case '=':
                if(!isNaN(num1) && !isNaN(num2)){
                    num2 = parseFloat(displayValue);
                    num1 = operate(num1, operator, num2);
                    resultDisplay.innerText = num1;
                    displayValue = '';
                    num2 = NaN;
                    operator = this.innerText;
                    break;
                };
                break;
        }

    };
};
function getKeyValue(e){
    console.log(e.code);
};

let displayValue = "";
let num1 = NaN;
let num2 = NaN;
let operator = "";
const resultDisplay = document.querySelector('#result-screen');
const allButtons = document.querySelectorAll('.calculator-button');
allButtons.forEach(button => {
    button.addEventListener('click', getButtonValue);
});
window.addEventListener('keypress', getKeyValue);