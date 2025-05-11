// MY-NOTES: DATA TRANSFORMATION

const numbers = [6, 7, 2, 8, 1];


// MY-NOTES: 01. map ()
// Use map() method kapag gusto mong baguhin lahat ng items sa isang array nang isang bagsakan at isave sa bagong array.
// Use map() method if gusto mo magperform ng calculation sa isang array at isave sa bagong array ang computed value.

/************************************/

// MY-NOTES: 01.1. map () - LONG METHOD
// 1.1 map () LONG METHOD
const newArray = numbers.map(function(element){
    //return value for new array

    // I want to double the value of elements from numbers map
    return element * 2;
})

console.log (newArray);     // Note that the number.map function is saved to newArray
// Output: [12, 14, 4, 16, 2]

console.log (numbers);      // Consoling this to compare to the newArray
// Output: [6, 7, 2, 8, 1]

// MY-NOTES: 01.2. map () - SHORT METHOD
// 1.2 map () SHORT METHOD USING ARROW FUNCTION
const anotherArray = numbers.map ( elem => elem * 3 );
console.log (anotherArray);
/************************************/

// MY-NOTES: 02. filter ()

//filter
// returns a new array with all the elements that satifies the condition specified in the function

// Example: #1
// I want to filter the array using element.
// If the element is greater than 5, then the elements will be save to an new array
const filterArray = numbers.filter( num => {
   return num > 5;
});

console.log (filterArray);  // Consoling this to display the array contianing more than the value of 5
// Output: [6, 7, 8]

console.log (numbers);      // Consoling this to compare to the newArray
// Output: [6, 7, 2, 8, 1]

// MY-NOTES: 02.1 filter () - LONG METHOD
// Example: #2 - LONG VERSION
// I want to filter all the even numbers in the array.
// If the element is even, then the elements will be save to an new array
const filterEven = numbers.filter( even => {
   if (even % 2 == 0) {
    return even;
   }
   else {
   }
});

console.log (filterEven);
// Output: [6, 2, 8]

// MY-NOTES: 02.1 filter () - SHORT METHOD
// Example: #2.1 - SHORT VERSION
const evenNumbers = numbers.filter ( even => even % 2 == 0 );
console.log (evenNumbers);
// Output: [6, 2, 8]



// MY-NOTES: 03. reduce ()
// Ang reduce() ay isang paraan (method) para pagsama-samahin o i-combine ang lahat ng items sa isang array at gawin itong iisang value.

/*
Parang pagbibilang ng sukli sa mga barya:

    Mayroon kang maraming coins (5-peso, 10-peso, 1-peso, etc.) sa isang lalagyan (array)

    Gusto mong malaman kung magkano lahat ang pera mo

    Gamit ang reduce(), isa-isahin mo at i-add lahat ng coins para malaman ang kabuuang halaga

    Ginagamit ang reduce() kapag:
    Kailangan mong i-compute ang total ng mga numbers sa array

    Note: Kapag magkakaiba ang data types ng elements sa array, 
            - if may string sa array, ikokonvert ng system by defaul lahat sa string at gagawin ang concatenation.

            -if purely number, then reduce () can be performed.
    
    reduce () has 4 arguments
            - previousValue =
            - currentValue = 
            - currentIndex =
            - array =
 */

// Add the entire array elements
const sum = numbers.reduce ((previousValue, currentValue) => {
    return previousValue + currentValue

});

console.log (sum);
// Output: 24


/*

Note:

    If the argument of the function you need is only 1 argument it is best to use an arrow function and you can no longer use bracker {}.

    If the argument of the function you need is greater than 1, it is best to use an arrow function with bracket and "return" syntax and it is more recommended for complex computation

    Case	                       Recommended Style	                Example
    Single simple operation        Concise (no braces)                  x => x * 2
    Multiple operations	           Block (with braces + return)	        (x, y) => { const sum = x + y; return sum * 2; }
    Debugging needed	           Block (with braces)	                (x) => { console.log(x); return x * 2; }
    Object literal return	       Block or parentheses	                () => ({ name: 'John' })

*/
