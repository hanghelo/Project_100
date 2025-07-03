//Goal: To create a button that will change the background color everytime it will be clicked

// MY-NOTES: 01. Select the Button
const button = document.querySelector("button");

// MY-NOTES: 02. Select the Background
const background = document.querySelector("body");

button.addEventListener("click", ()=>{
    let color = "#";
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    // this will generate random numbers combined with letters
    // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive), e.g., 0.123456789.
    // .toString(16) converts that number to a hexadecimal string, e.g., 0.123456789 becomes "0.1f9acf0798".
    // slice trims the initial generated value (ex: #0.1f9acf0798) from index 2 up to index 8 leaving the value to #1f9acf0
    console.log(color);


    background.style.backgroundColor = color;
})
