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
pets[pets.length] = 'Milo';
console.log(pets);


// MY-NOTES: DELETE ELEMENT IN AN ARRAY
