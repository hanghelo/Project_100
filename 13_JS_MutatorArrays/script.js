// MY-NOTES: MUTATOR METHODS (CHANGING METHODS)

const array = ['a', 'b', 'c', 'd', 'e,'];

// MY-NOTES: REVERSING ARRAY ORDER

// ARRANGE THE ITEMS IN THE ARRAY IN DESCENDING ORDER
// REVERSE
console.log (array.reverse());
console.log (array);

const list = ['z', 'd', 'c', 'd', 'a'];
console.log(list.reverse());

// MY-NOTES: SORTING ARRAY ORDER
// ARRANGE THE ITEMS IN THE ARRAY IN ASCENDING ORDER / ALPHABETICALLY
// SORT
console.log (list.sort());
console.log (list);


// MY-NOTES: REMOVES OR REPLACES OR EXTRACT NEW ELEMENTS USING SPLICE
const alphabet = ['a', 'b', 'c', 'd', 'e'];
//index ref:       0    1    2    3    4

// REMOVES THE ITEM/S USING A STARTING ARRAY INDEX
// EXTRACTS ITEMS FROM ARRAY USING INDEX
console.log (alphabet.splice(2));          // In the example provided, 2 is the starting index, and indeces before 2 will be separated/removed.
                                           // It gets or extracts the elements starting from index 2 and so on.
                                           // Output: ['c', 'd' ,'e']

console.log (alphabet);                    // Now, what is remaining in the array are the following:
                                           // Output: ['a', 'b']

// MY-NOTES: REMOVES THE LAST ELEMENT
const vowel = ['a', 'e', 'i', 'o', 'u'];
console.log (vowel);

const lastElem = vowel.splice(-1);         //-1 is used to select the last element
console.log (vowel);                       // Output: ['a', 'e', 'i', 'o']

// MY-NOTES: SAMPLE EXTRACTION USING SPLICE
const pokemon = ['pikachu', 'squirtle', 'charmander', 'bulbasaur', 'piplup', 'torchick', 'rowlet', 'chikorita', 'cyndaquil', 'totodile'];

// 1. SORT
pokemon.sort();
console.log(pokemon);

// 2. EXTRACT
// I want to extract all pokemon that starts with index 1 and ends with 3

const extractedPokemon = pokemon.splice(1,3);           // removed ['charmander', 'chikorita', 'cyndaquil'] and assign to extractedPokemon
console.log (extractedPokemon);