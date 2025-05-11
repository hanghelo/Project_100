// MY-NOTES: LOOPS
// MY-NOTES: FOR LOOP


// MY-NOTES: FOR LOOP SYNTAX
/*

for (initial expression, condition, update expression) {
    //for loop body
}

*/

// MY-NOTES: FOR LOOP SYNTAX SAMPLE
// Loops for player game lives
for (playergame_live = 3; playergame_live >= 0; playergame_live--) {
    console.log (`Loop: You have ${playergame_live}`);
}

// Loops for half pyramid
for (let i = 1; i <= 5; i++) {
  console.log('*'.repeat(i));
}

// Loops for even numbers starting with 2
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

let game_score = 3;
for ( ; game_score > 0; game_score--) {
    console.log (`Score: ${game_score}`);
}


// MY-NOTES: FOR WHILE SYNTAX SAMPLE
let game_lives = 3;
while (game_lives > 0) {
    console.log(`While: You have ${game_lives}`);
    game_lives--;
}


let i = 0;
while (i < 10) {
    i+=2;
    console.log(i);
}



// MY-NOTES: COMBINING ELEMENTS FROM 3 DIFFERENT ARRAYS TO CREATE AN ID
const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = [1, 2, 3, 4, 5];
const symbols = ["!", "@", "#", "$", "5"];


for (i=0; i<numbers.length; i++) {       
    combined = letters[i] + numbers[i] + symbols[i];
    console.log(combined);
}


let j = 0;
while ( j < numbers.length ) {
    j++;
    let combined = letters[j] + numbers[j] + symbols[j];
    console.log(combined);
}