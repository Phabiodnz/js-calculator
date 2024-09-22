let number1 = 0;
let number2 = 0;
let operator = 0;

const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;

function operation(operator){
    if (operator == "+"){
        return operator = "sum";
    }else if(operator == "-"){
        return operator = "subtract";
    }else if(operator == "x"){
        return operator = "multiply";
    }else if(operator == "/"){
        return operator = "divide";
    }else{
        return false;
    }
}

function operate(num1,num2,operator){
    let x = operation();
    



}


