let number1 = 0;
let number2 = 0;
let operator = 0;
let clickCounter = 0;

const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;


function getNumber(){ // Get's the number from the input and converts to Integer
    let inputElement = parseInt(document.getElementById("main-input").value);
    return inputElement;
}

function numberChosen(){ // Chooses wich number it will get based on the number of times the button was clicked
    if(clickCounter == 0){
        clickCounter++
        number1 = getNumber();
    }else{
        clickCounter = 0;
        number2 = getNumber();
    }
}

function getOperation(){ // Get's the operation based on wich button you pressed before
    let operationAtTheMoment = operator;
    return operationAtTheMoment;
}
function setOperation(operationWanted){ // Set's the operation based on wich button you pressed and reset's the main-input
    operator = operationWanted;
    numberChosen();
    let inputElement = document.getElementById("main-input");
    inputElement.value = "";
}

function operation(){ // Operates based on the operator that was chosen
    let operationWanted = operator;
    if (operationWanted == '+'){
        return add(number1,number2);
    }else if (operationWanted == '-'){
        return subtract(number1,number2);
    }else if (operationWanted == 'x'){
        return multiply(number1,number2);
    }else if (operationWanted == '/'){
        return divide(number1,number2);
    }else{
        return false;
    }
}

function typeOnInput(typedNumber) {
    let inputElement = document.getElementById("main-input");
    inputElement.value = inputElement.value + typedNumber;
}

function clearInput(){
    let inputElement = document.getElementById("main-input");
    inputElement.value = "";
}

function showResult(){
    numberChosen();
    let result = document.getElementById("result");
    result.textContent = ("The Result is: " + operation());
}