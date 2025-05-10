/*

Create a JavaScript program that iterates through the integers between 1 and 100.

Challenges:
Create an empty array named ‘multiples’ for the numbers that are multiples of 3 & 5.

Log the iteration on the console.

For multiples of 3 print the number and the word “Fizz”

For multiple of 5 print the number and the word “Buzz”.

Print "FizzBuzz" for numbers that are multiples of three and five.

At the end of the loop, print all the numbers which are multiples of 3 & 5.

*/

// --------------------------------

/* Create an empty array named ‘multiples’ for the numbers that are multiples of 3 & 5.*/
let multiples = [];

for (let i=1; i<=30; i++ ) {

    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log (`${i} FizzBuzz`);
        multiples.push (i);                 // Save the for loop output into the array
    } else if ( i % 3 == 0 ) {
        console.log (`${i} Fizz`);
        multiples.push (i);                 // Save the for loop output into the array
    } else if ( i % 5 == 0 ) {
        console.log (`${i} Buzz`);
        multiples.push (i);                 // Save the for loop output into the array
    } else {
        console.log (i);
                                            // If the number is not divisible by 3 or 5 the number will not be saved in the mutiples array
    }
}

console.log (multiples);