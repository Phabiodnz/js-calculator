const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;

function operation(){
    let inputElement = document.getElementById("main-input").value;
    let splitInputString = inputElement.split("");
    let convertedNumber1 = parseInt(splitInputString[0]);
    let convertedNumber2 = parseInt(splitInputString[2]);
    if(splitInputString[1] == "+"){
        return add(convertedNumber1,convertedNumber2);
    }else if(splitInputString[1] == "-"){
        return subtract(convertedNumber1,convertedNumber2);
    }else if(splitInputString[1] == "x"){
        return multiply(convertedNumber1,convertedNumber2);
    }else if(splitInputString[1] == "/"){
        return divide(convertedNumber1,convertedNumber2);
    }else{
        return false;
    }
}

function typeOnInput(typedNumber) {
    let inputElement = document.getElementById("main-input");
    let splitInputString = inputElement.value.split("");
    if (splitInputString.length < 3){
        inputElement.value = inputElement.value + typedNumber;
    }else{
        alert("The operation consists on 2 numbers and an operator between them, use the CLEAR BUTTON and try again");
    }
}

function clearInput(){
    let inputElement = document.getElementById("main-input");
    inputElement.value = "";
}

function showResult(){
    let result = document.getElementById("result");
    result.textContent = ("The Result is: " + operation());
}