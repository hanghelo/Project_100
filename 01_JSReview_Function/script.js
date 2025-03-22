//Define the Function
function BMI_Calculator (weight, height) {
    const BMI_Value = weight / (height * height);
    return BMI_Value;
}

//Input of the Function
let user_Name = prompt ('Enter your name: ');
let user_weight = Number(prompt ('Enter your weight: '));
let user_height = Number(prompt ('Enter your height: '));

//Calling the Function
let computed_BMI = BMI_Calculator(user_weight, user_height);

//Consoling the output of the Function
console.log (`Hi ${user_Name}! Your BMI is ${computed_BMI.toFixed(2)}`);