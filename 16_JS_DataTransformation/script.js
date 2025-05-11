// MY-NOTES: ITERATION METHODS

// MY-NOTES: FOR EACH
// MY-NOTES: FOR EACH ITERATION - LONG METHOD
// FOR EACH Iteriation accepts up to three arguments
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

const numbers = [1, 2, 3, 4, 5];
let square = [];


// The forEach() method calls a function for each element in an array.
// In the example below, the computeSquare is the callback function. Callback function is a function passed as an argument and might be to another function.
// The function is declare outside the numbers.forEach(computeSquare);
numbers.forEach(computeSquare);
compute = [];

// This is the callback function
function computeSquare (element, index, array) {         // element = the value of item in the array ; index = position ; array = list or object
    // console.log(element, index, array);
    // console.log(`The element ${element} is on index ${index}`);
    console.log (element * element);
}


// MY-NOTES: FOR EACH ITERATION - SIMPLIFIED METHOD

// MY-NOTES: FOR EACH ITERATION - USING ANONYMOUS FUNCTION
// We place the function inside the forEach argument
// We use an "ANONYMOUS FUNCTION" (a function without a name) since it can be used as argument for a function.
numbers.forEach (function (element) {
    console.log (element * element);
});

// MY-NOTES: FOR EACH ITERATION - USING ARROW FUNCTION
numbers.forEach ( element => console.log (element * element)) ;



// MY-NOTES: EVERY

// every()

// Check if all numbers in the array meet condition
// array.every() operates at the array level, not the individual item level. It checks if all elements in the entire array satisfy a condition and returns a single boolean (true/false) for the whole array, not per item.

// num is used as the function parameter
// numb > 3 is the condition within the function body 
let check = numbers.every (num => num > 3);
console.log (check);
// Output: false

let checking = numbers.every (num => num >= 1);
console.log (checking);
// Output: True


// MY-NOTES: SOME

// some()
// opposite of every
// if atleast 1 element statifies the condition in the callback function, then it will return TRUE
// some () also operates at the array level and not the individual item level.
let checkSome = numbers.some (num => num > 1);
console.log (checkSome);

// since atleast 1 num from the numbers array is greater than [1, 2, 3, 4, 5], then it satisfies the conditiion num > 1.
// Output: True






