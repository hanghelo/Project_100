
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