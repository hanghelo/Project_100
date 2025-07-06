

// MY-NOTES: 01. Define the HTML to be selected
const showModalBtn = document.querySelectorAll (".showModalBtn");
//Selects all the class with showModalBtn class value

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector (".closeModalBtn");
const toggleBtn = document.querySelector (".toggleBold");

// console.log (showModalBtn);


// MY-NOTES: 02. Create a function that will show and hide the class modal through deleting the hidden.
// Currently the class for the modal is set to hidden, and we want to remove the hidden class value so it will display.

// Delete to Hide
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Add to Show
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Bolding the Text
const toggleBold = function () {
    const para = document.querySelector ("p");
    para.classList.toggle("bold");
}


// MY-NOTES: 03. Adding Events Listener
// MY-NOTES: 03.1 Assign the open and close modal functions to the event listener - click and keyboard key - using for each to apply in every similar buttons

// Open Modal Button

// showModalBtn[0].addEventListener("click",openModal);
// since we have 3 buttons, if we want to only apply the open modal function to one button, we can identify the index of the button

// showModalBtn[0].addEventListener("click",openModal);
// showModalBtn[1].addEventListener("click",openModal);
// showModalBtn[2].addEventListener("click",openModal);

// pero since this is not that practical, we can use foreach para iapply sa lahat ng buttons na parehas na behavior
showModalBtn.forEach(( element, i ) => {
    showModalBtn[i].addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
// Assigning an event listener for x button click

overlay.addEventListener("click", closeModal);
// Assigning an event listener for clicking outside the modal will close the modal


// MY-NOTES: 03.2 
document.addEventListener ("keydown", function (keyboardEvent) {
    console.log(keyboardEvent);
    console.log(keyboardEvent.key);

    if (keyboardEvent.key === "Escape") {
        closeModal();
    }
});

// document - selects the entire HTML document
// addEventListener - addEventListener in the HTML document
// keydown - an event listerner method use to record keyboard keydown count
// keyboardEvent - is any variable you can set to record the keydown
// keyboardEvent.key - selects the "key" information from the JavaScript KeyboardEvent object or key-value pair
// if condition - validates if the keydown pressed is equal to the Escape
// closeModal () - call the closeModal () if the condition is true


toggleBtn.addEventListener ("click", toggleBold);