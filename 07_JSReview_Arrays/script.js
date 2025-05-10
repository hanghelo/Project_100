// MY-NOTES: ARRAY


// MY-NOTES: CREATING AN ARRAY
// Creating an array using Literal Syntax
const pets = ['Boom','Jabba','Milo'];
console.log (pets);

// Creating an array using Array Function
const theBeatles = new Array ('John', 'Paul', 'Geoge', 'Ringo')
console.log(theBeatles);

// Creating an array using Literal Syntax with Mixed Data Type
const person = ['Juan', 'Dela Cruz', 30, ['eat', 'sleep', 'code', 'unwind','ride',['github','google','canva']]];
console.log (person);

// MY-NOTES: DATA TYPE CHECKING: ARRAY
console.log(typeof pets);   //output: object
console.log(typeof person); //output: object

// MY-NOTES: ACCESSING AN ITEMS IN AN ARRAY
// Accessing array items through index
console.log (pets[0]);
console.log (pets[2]);
console.log (person[3]);

// MY-NOTES: ACCESSING AN ITEMS IN AN ARRAY WITHIN ARRAY
console.log (person[3][0]);
// The data type of [3] is list and to access and print index [0] is to have it coded as above

console.log (person[3][5][0]);     // selecting the items inside an array of an array of an array

// MY-NOTES: KNOWING ARRAY LENGTH
console.log (person.length);        //counting the items inside an array
console.log (pets.length);
console.log (person[3].length);     //counting the items inside an array of an array


// MY-NOTES: FINDING AND SELECTING THE LAST ITEM IN AN ARRAY
console.log(pets[pets.length-1]);


// MY-NOTES: CHANGE ELEMENT IN AN ARRAY
pets[2] = 'Max';
console.log(pets);

// MY-NOTES: ADD ELEMENT IN AN ARRAY

//Adds the element in the beginning element of an array
const grocery = ['Milk','Bread','Biscuits'];
console.log (grocery);
grocery.unshift('Chocolate');      
console.log (grocery);




//Adds the element in the last element of an array
const pokemon = ['Charizard', 'Blastoise', 'Onyx']
console.log(pokemon);
console.log(pokemon.length);

pokemon[pokemon.length] = 'Pikachu';
console.log(pokemon);
console.log(pokemon.length);

pokemon.push('Togepi');             // Standard way of adding an element as the last item in the array.
console.log(pokemon);
console.log(pokemon.length);


// MY-NOTES: DELETE ELEMENT IN AN ARRAY
pokemon.pop();               // Deletes the last element of an array
console.log (pokemon);

pokemon.shift();             // Deletes the first element of an array
console.log (pokemon);


// MY-NOTES: SEARCHING OR LOOKUP AN ELEMENT IN AN ARRAY USING indexOf
// Searches an element of an array and returns its position or the index number
const pencilCase = ['ballpen', 'eraser', 'pencil', 'glue'];
//index reference:     0           1         2        3
const index = pencilCase.indexOf ('pencil');
console.log (index); //Output: "2" since pencil is in the index 2

//OUTPUT IF THE ITEM IS EXISTING IN THE ARRAY
console.log (pencilCase.indexOf('eraser'));     //Output: 1

//OUTPUT IF THE ITEM IS EXISTING IN THE ARRAY
console.log (pencilCase.indexOf('mouse'));      //Output: -1
console.log (pencilCase.indexOf('battery'));    //Output: -1


// MY-NOTES: "IF CONTAINS" SEARCH USING includes
// Checks if an array contains a sepcified element
if (pencilCase.includes('pencil')) {
    console.log ('There is a pencil in the keyword');
} else {
    console.log ('There is no pencil in the keyword');
}