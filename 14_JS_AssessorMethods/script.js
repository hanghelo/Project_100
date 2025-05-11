// MY-NOTES: ASSESSOR METHODS 
// Asessor Methods do not modify the original or existing array unlike mutator.
// It will return a new modified array based on modified array

const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1, 2, 3, 4, 5];
const symbols = ["!", "@", "#", "$", "5"];


// MY-NOTES: Concat 2 Arrays
// Array will be added at the end of an array.
// You need to assign the combined array to a variable so the combined data will be stored.
const letterAndnumbers = letters.concat(numbers);
// Letters wil be combined with numbers array

console.log (letterAndnumbers);
// Output: ['a', 'b', 'c', 'd', 'e,', 1, 2, 3, 4, 5]

// Verify if the orignal arrays are not changed.
console.log (letters);                  // ['a', 'b', 'c', 'd', 'e,']
console.log (numbers);                  // [1, 2, 3, 4, 5]


// MY-NOTES: Concat 3 or More Arrays
// Note that you can add 2 or more array and assign in a single variable
const lettersNumbersSymbols = letters.concat(numbers, symbols);

console.log (lettersNumbersSymbols);
// Output: ['a', 'b', 'c', 'd', 'e,', 1, 2, 3, 4, 5, '!', '@', '#', '$', '5']


// MY-NOTES: Join
console.log (letters.join());           // By default, JOIN uses comma (,) as separator or delimiter
// Output: a,b,c,d,e,

console.log (letters.join(', '));       // Add space after each comma
// Output: a, b, c, d, e,

console.log (letters.join(' + '));      // Uses " + " (with spaces) as delimiter or separator
// Output: a+b+c+d+e

console.log (letters, numbers);         // Validates that the original array are not modified or changed

// MY-NOTES: Slice
// Selects the part of an array and returns the new array
// Slice has 2 parameters; start and end.
// If the start parameter is not defined, it will start at index 0 by default.
// If the start parameter is the only parameter defined, it will select until the last element of the array
// If the end parameter is not defined, it will select until the last element of the array
// slice (0) - start the slicing selection at index 0
// slice (1) - start the slicing selection at index 1
// slice (-1) - start the slicing selection at the last index

// MY-NOTES: Slice using positive parameter
console.log (letters);
// Output: ['a', 'b', 'c', 'd', 'e']

console.log (letters.slice());          // If the paramater is not defined, it will start slicing a index 0 and the same array will be returned
// This is used to create a copy of an array or an object
// Sample below:
const lettersCopy = letters.slice();
console.log(lettersCopy)
// Output: ['a', 'b', 'c', 'd', 'e'] which is the same with line 56 output


console.log (letters.slice(1,3));
// Output: ['b', 'c']

// MY-NOTES: Slice using negative parameter
console.log (letters.slice(-1));
// slice (-1) - start the slicing selection at the last index
// Output: ['e']

console.log (letters.slice(-2));
// slice (-2) - start the slicing selection at the second to the last index
// Output: ['d', 'e']

console.log (letters.slice(-3));
// slice (-3) - start the slicing selection at the third to the last index
// Output: ['c', 'd', 'e']

// MY-NOTES: Slice using positive and negative parameter
console.log (letters.slice(0,-1));
// slice (0,-1) - start the slicing selection at index 1 up to the second to the last.
// Output: ['a', 'b', 'c', 'd']
// the index ended with d and excluded e

// MY-NOTES: toString()
// Returns converts a string representing an array and its elements
// you can convert array to string using toString()
console.log (letters.toString());



