/*

Let's return to Juan and Pedro's BMI comparison. In this case, we'll use objects to perform the calculations.

Challenges:
Create an object for each with the following properties: name, weight, and height.

Create a method on each object to calculate their respective BMI and then store the value to a property.

Print an output to the console comparing who has the higher BMI. Ex. "Juan’s BMI (29.2) is higher than Pedro’s BMI (25.7)."
Test case:
Case: Juan’s weight is 69 kg and height is 1.45 m. Pedro’s weight is 75 kgs and height is 1.70 m.

*/

// Declaring Pedro's object
const pedro = {
    height: 1.70,
    weight: 75,
    //TODO: Create a BMI Property
}

// Declaring Juan's object
const juan = {
    height: 1.45,
    weight: 69,
    //TODO: Create a BMI Property
}

// Delcaring the function and the formula to compute for the BMI to be used for the computation of Pedro and Juan's BMI.
function bmiCalculator (height, weight) {
    const bmi = weight / (height * height);
    return bmi;
}

//Calling the BMI Calculator Function
let pedro_bmiValue = bmiCalculator (pedro.height, pedro.weight);
let juan_bmiValue = bmiCalculator  (juan.height, juan.weight);


// Printing the computed BMI to check if it successfully computes the BMI 
console.log(pedro_bmiValue.toFixed(2));
console.log(juan_bmiValue.toFixed(2));

// Assigning the computed BMI to hte respective Object
pedro.bmi = pedro_bmiValue.toFixed(2);
juan.bmi = juan_bmiValue.toFixed(2);
const diff = Math.abs(pedro.bmi - juan.bmi);


// Printing the computed BMI to check if it successfully returns the value to the object 
console.log(pedro);
console.log(juan);

// Output
let result = pedro.bmi > juan.bmi ? `Pedro's BMI (${pedro.bmi}) is higher than Juan's BMI (${juan.bmi}) by (${diff.toFixed(2)})` : `Juan's BMI (${juan.bmi}) is higher than Juan's BMI (${pedro.bmi}) by (${diff.toFixed(2)})`;

console.log (result);






