//Calculator Using Function

//Declare the Function

/* Operation Function*/
function operation (operationTouse,firstNumber, secondNumber) {
    let remarks;

    if (operationTouse==="/" AND firstNumber === 0){
        remarks = 'Sorry 0 value cannot be divided';
    } else if (operationTouse === "+") {
        remarks = sumOperation (firstNumber,secondNumber);
    } else if (operationTouse === "-") {
        remarks = minusOperation (firstNumber,secondNumber);
    } else if (operationTouse === "*") {
        remarks = timesOperation (firstNumber,secondNumber);
    } else if (operationTouse === "/") {
        remarks = divideOperation (firstNumber,secondNumber);
    } else {
        remarks = "Invalid Operations";
    }
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
let num1 = number(prompt('Enter the first number: '));
let num2 = number(prompt('Enter the second number: '));
let operation = prompt ('Enter the operation to use: ');



//Calling the Function
let sum_value = sumOperation (num1,num2);
let difference_value = minusOperation (num1,num2);
let product_value = timesOperation (num1,num2);
let qoutient_value = divideOperation (num1,num2);


//Consoling the Output of the Function
