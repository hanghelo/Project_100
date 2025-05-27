//MY-NOTES: SELECTING DOM OBJECT

// MY-NOTES: Selecting a CSS using Javascript
// Selecting the html element through CSS class using JS
// document.querySelector('.gametitle');

// consoling it log so I can check the value of the class selected
//console.log (document.querySelector('.gametitle').textContent);

// MY-NOTES: Generate a random number
// 01. Generate a random number to guess
let randomNumber = Math.floor(Math.random() * 100 + 1);

// Math.floor() takes a number and rounds it down to the nearest whole integer. So 46.7 becomes 46.
// Math.random() This function returns a floating-point, pseudo-random number in the range [0, 1). This means it can be 0 (inclusive), but will never be 1 (exclusive or di kasama ang 1). Note that the return value will be a decial value and that is why math.floor () is needed to convert the number to integer. 
// Math.random() * 100 - Multiplies the random number by 100, resulting in a number in the range [0, 100). Example: If Math.random() gives 0.457, then 0.457 * 100 = 45.7.
// Bakit may + 1? dahil yung 100 ay magiging exclusive o di maisasama at para maisama ay kailangan magadd ng 1 para kung 100.09 ang sagot, iroround off ito ng math.floor to 100.

console.log (randomNumber);
// Output: printing the random number


// MY-NOTES: Selecting the element which will be manipulated
// 02. Select the elements and store/insert values in the element or paragraph
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector ('.lastResult');
const lowOrHi = document.querySelector ('.lowOrHi');

// 03. Controlling the Input and Submit
const guessField = document.querySelector ('.guessField');
const guessSubmit = document.querySelector ('.guessSubmit');

const playOrEnd = document.querySelector ('.playOrEnd');
const playAgain = document.querySelector ('.playAgain');


// MY-NOTES: Defining the start of guess count
let guessCount = 1;


// MY-NOTES: Creating function

// 04. Create a function that will check the guess of the user
function checkGuess () {

    // 4.1 Kuhain at isave ang user input mula sa field
    let userGuess = Number(guessField.value);
    // Gamit yung guessField, sineselect ko yung kasalukuyang value gamit ang .value, icoconvert to Number using Number at isasave sa userGuesses na variable


    if (guessCount === 1) {
        guesses.textContent = 'Previous Guesses: ';
    }

    // Appends current and succeeding guesses
    guesses.textContent += userGuess + ' ';

    // Check if user guess is equal the random number
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! you guessed the right number ♥';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver ()
        youCanPlayAgain ()

    } else if ( guessCount === 10 ) {
        lastResult.textContent = 'Game Over!!! :(';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver ()
        hideAndDisplay ()

    } else {
        lastResult.textContent = `Wrong! You only have ${Math.abs(guessCount - 10)} guesses remaining.`;

        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Your previous guess was too low';
        } else if (userGuess >  randomNumber){
            lowOrHi.textContent = 'Your previous guess was too high';
        } else {
            lowOrHi.textContent = 'Your previous guess was not a number';
        }
    }

    guessCount ++ ;
    guessField.value = ''; // Empty the guessField
    guessField.focus ();   // Focus on the guessField
}



// MY-NOTES: Handling Click Events
// 2 Parts of Events - Event Handlers and Event Listener

// Adding Event Listener in the Button Class
guessSubmit.addEventListener ('click', checkGuess);

function setGameOver () {
    guessField.disabled = true;     // Setting the field  disable so the user can no longer guess
    guessSubmit.disabled = true;    // Setting the button  disable so the user can no longer submit
}

function hideAndDisplay () {
    playOrEnd.hidden = false;        // Setting the play or end to hidden
}

function youCanPlayAgain () {

    guessField.disabled = false;     // Setting the field  disable so the user can no longer guess
    guessSubmit.disabled = false;    // Setting the button  disable so the user can no longer submit

    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100 + 1); // dineclare yung randomNumber para mag-generate siya ng panibagong value
    console.log (randomNumber) // For the purpose na icheck sa console log

    guesses.textContent = 'Previous Guesses: '; // Icleclear ko yung previous by copypasting yung previous code, basically ibalik siya sa umpisa.
    lastResult.textContent = '';
    lastResult.style.backgroundColor = '';
    lowOrHi.textContent = '';

    guessField.value = '';
    guessField.focus();

    playOrEnd.hidden = true;
}

playAgain.addEventListener ('click', youCanPlayAgain);


// 01. Select the element and assign it to a variable
const cancelBtn = document.querySelector ('.cancel');
const endgame = document.querySelector('.endgame');


// 03. Define the function
function cancel () {
    endgame.style.display = 'none';
    endgame.style.display = 'flex';
}

// 02. Identify the event to use and the function name
cancelBtn.addEventListener ('click', cancel);

