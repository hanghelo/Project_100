// Select the div boxes to get the color value
const boxes = document.querySelectorAll ('.colorbox');      // 1. Select all the boxes with class .colorbox 
console.log (boxes);                                        // 1.1 Pangcheck lang - Returns a NodeList (6) since there is 6 divs //Output: i: div.colorbox.color

boxes.forEach( boxToselect => {                                     // 2. Code here will run for EACH box. Applyan ng code each box
    boxToselect.addEventListener('click', () => {                     // 2.1 In each box, assign an event listener
    const color = boxToselect.textContent.trim().toLowerCase();     // 2.2 Formats the textcontent value
    console.log (color);                                            // 2.3 Pang-check lang na kapag clinick yung div ay magcoconsole log yung 

    boxToselect.style.backgroundColor = color ;                     // 2.4 Select the i or the boxToSelect (the callback parameter) and assign the color to every div
    boxToselect.style.color = 'white';                              // 2.5 Select the text color and assign white to every div
    });
});

///////// color-container2
// asking user input
const whatColor = document.querySelector(".color-container2");
console.log (whatColor);

whatColor.addEventListener('click', () => {
    
    // Ask user for input
    const userColor = prompt("What color do you want?");
    
    if (userColor) {
        whatColor.style.backgroundColor = userColor.toLowerCase();
        whatColor.style.color = 'white'; // Optional: make text readable
    }
});

///////// color-container2
// passing color from one div to another div
const colorContainer3 = document.querySelector(".color-container3");

colorContainer3.addEventListener('click', () => {
  console.log("Waiting for box selection...");

  function handleBoxClick(event) {
    const selectedColor = event.target.textContent.trim().toLowerCase();
    console.log("You selected:", selectedColor);

    colorContainer3.style.backgroundColor = selectedColor;
    colorContainer3.style.color = 'white';

    // Remove this temporary listener from all boxes
    boxes.forEach(box => {
      box.removeEventListener('click', handleBoxClick);
    });
  }

  // Temporarily add the listener to each box
  boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
  });
});
