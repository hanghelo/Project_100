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