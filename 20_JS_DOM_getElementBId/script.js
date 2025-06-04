
// MY-NOTES: Selecting an ID using JS
document.getElementById("title");
console.log(document.getElementById("title"));
// Output: <h1 id="title">Bucket List</h1>
// Note that you are select the whole HTML this tool


// MY-NOTES: ASSIGNING NEW VALUES : Method 1
document.getElementById("title").innerHTML = "New Title";
console.log (document.getElementById("title").innerHTML = "New Title");


// MY-NOTES: ASSIGNING NEW VALUES : Method 2 (promotes flexibility)
// 1. Selects the element using ID
const title = document.getElementById("title");
// 2. Selecting the properties of the selected ID
title.innerHTML = "Bucket List";
// 3. Verify using console.log
console.log (title.innerHTML = "Bucket List");
// - End -

// MY-NOTES: CREATE NEW ELEMENT (CREATE NEW LIST)and PLACE IT WHERE IT SHOULD BE
// 01. Define the element to add and assign in a variable
const newList = document.createElement("li");
// 02. Assigning the value in the selected element
newList.innerHTML = "Skydiving"
// 03. Append (Connecting the child-the element createtd to the mother element). Since li is under the ul element, then we can use id="parent" to append the child
    // 3.1 Select first the mother element and assign to a variable
const list = document.getElementById ("parent");
    // 3.2 Use appendChild method to connect mother-child element. Format: motherElement.appendChild(newElementToAdd); Note that the new element as the last child of the parent node by default.
list.appendChild(newList);
// Optional: You can use CSS to re-order the items within the list
// - End -

// MY-NOTES: REMOVE ELEMENT
// 01. Define the element to REMOVE and assign in a variable
const deleteList = document.getElementById("bl-1");
// 02. Use the removeChild method to remove child element from the parent element. Format: motherElement.appendChild(newElementToAdd).
// list.removeChild (deleteList);
// 03. Console.log to verify if the item is deleted successfully
// console.log(list.removeChild (deleteList));
//Outputs: <li class="learn" id="bl-1">Learn how to code</li>
console.log(list.removeChild (deleteList).innerHTML);
//Outputs: Learn how to code

// MY-NOTES: QUERY SELECTOR
// MY-NOTES: SELECTING HTML TAG USING QUERY SELECTOR METHOD

// Sample 1: Selecting the paragraph tag
const paragraph = document.querySelector("p");      
console.log (paragraph);

// Sameple 2: Selecting and img and its source and setting new value
const img = document.querySelector("img");      // Output: <p id="description">List of things I would want to do.</p>
console.log (img.getAttribute("src"));          // Output: https://media.istockphoto.com/id/960544896/photo/conceptual-and-inspirational.jpg?s=612x612&w=0&k=20&c=5xpozXwU4qYxR4_AKpwzniIj-b_7NcNmwiAQuRpOwBU=

function updateAttribute () {
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpg9E31kyD-1kfVs_46c4TlpCfFVSWokgkg&s"); 
    // Using img, we are selecting the image tag and using the setAttribute method we can define the attribute to be selected and assign the new value

    img.setAttribute("alt","Pikachu");
    // Using img, we are selecting the image tag and using the setAttribute method we can define the attribute to be selected and assign the new value
}