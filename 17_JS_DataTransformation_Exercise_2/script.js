const fruitBasket = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Kiwi",
    "Peach"
];

// Displaying the fruit basket
function display_fruitBasket () {
    fruitBasket.forEach ( fruit => console.log (fruit));
    // For each fruit in the fruitbasket, console.log fruit
    // MY-NOTES: PRINT FRUIT IN THE FRUIT BASKET USING FOREACH
}
display_fruitBasket ();

// Add a fruit in the fruit basket
function add_fruit () {
    const fruitToAdd = prompt ('Fruit to Add: ');
    console.log (`You've added ${fruitToAdd}`);

    fruitBasket.push (fruitToAdd);
    display_fruitBasket ();
}
add_fruit ();


// Remove a fruit
function remove_fruit () {
    const fruitToRemove = fruitBasket.pop ();
    console.log (`You've removed ${fruitToRemove}`);

    
    display_fruitBasket ();
}

remove_fruit ();