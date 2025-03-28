//Calculator Using Function

//Declare the Function

/* Operation Function*/
function operation (operationTouse,firstNumber, secondNumber) {
    let remarks;

    if (operationTouse==="/" && firstNumber === 0){
        remarks = '0 value cannot be divided';
    } else if (operationTouse === "+") {
        remarks = sumOperation (firstNumber,secondNumber);
    } else if (operationTouse === "-") {
        remarks = minusOperation (firstNumber,secondNumber);
    } else if (operationTouse === "*") {
        remarks = timesOperation (firstNumber,secondNumber);
    } else if (operationTouse === "/") {
        remarks = divideOperation (firstNumber,secondNumber);
    } else {
        remarks = "invalid operation. You should put a valid math operation";
    }
    return remarks;
}

/* Addition*/
function sumOperation (firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}

/* Subtraction*/
function minusOperation (firstNumber, secondNumber) {
    let difference = firstNumber - secondNumber;
    return difference;
}
/* Multiplication*/
function timesOperation (firstNumber, secondNumber) {
    let product = firstNumber * secondNumber;
    return product;
}

/* Division*/
function divideOperation (firstNumber, secondNumber) {
    let qoutient = firstNumber / secondNumber;
    return qoutient;
}



//Input of the Function
let num1 = Number(prompt('Enter the first number: '));
let num2 = Number(prompt('Enter the second number: '));
let operation_input = prompt ('Enter the operation to use: ');



//Calling the Function
let sum_value = sumOperation (num1,num2);
let difference_value = minusOperation (num1,num2);
let product_value = timesOperation (num1,num2);
let qoutient_value = divideOperation (num1,num2);
let operation_output = operation (operation_input, num1, num2);


//Consoling the Output of the Function
console.log (`Your first number is ${num1}.
    The second number is ${num2}.
    The operation you chose was ${operation_input}.
    The answer is ${operation_output}.`);
