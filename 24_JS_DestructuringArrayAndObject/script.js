
// MY-NOTES: Destructuring Array
// An ES6 features which unpack values from an array or an object into separate variables
const array = ['Hello', 'World'];

// MY-NOTES: Without Destructuring or N
console.log (array[0]);                 // Output: Hello
console.log (array[1]);                 // Output: World



// MY-NOTES: With Destructuring Assignments
const [first, second] = array;
console.log (first);                    // Output: Hello
console.log (second);                   // Output: World
// Kailan gagamitin ang Destructuring?
// - Kapag gusto mong kunin agad ang mga specific na values sa array o object
// - Kapag gusto mong gawing mas readable ang code mo
// - Kapag nagtatrabaho ka sa mga function returns na array/object
// - Kapag gusto mong maiwasan ang paulit-ulit na array[0], obj.key, etc.

// Sample: Without Destructuring        With Destructuring
// const name = person.name;            const { name, age } = person;
// const age = person.age;

// Mas maikli at malinis ang code at mas mabilis basahin


// MY-NOTES: sample object destructuring
const sampleObject = {
    firstName: "Gelo",
    middleName: "Cadiente",
    lastName: "Reyes",
    birhdate: "12/13/1996",
    age: 29,
    course: "BS Industrial Engineering",
    work: "Business Analyst"
}

// sample object
// imagine marami kang key value pair, nasa 1000+, syempre di mo naman yan idedestructure assignment one-by-one, but instead you can use "...others" para madestructure yung remaining key value pair, tas kung may key ka na gustong hanapin at masigurado mo na merong ganung data, you can use if state with the use of "in"
const {
    firstName,
    middleName,
    lastName,
    ... others
} = sampleObject

console.log (lastName);                    // Output: Reyes

// i want to check kung may work na key sa object
if ('work' in sampleObject) {
    console.log (`Work exist: ${sampleObject.work}`);   // Work exist: Business Analyst       
} else {
    console.log ('Work is not available in the object');
}

// i want to check kung may hobby na key sa object
if ('hobby' in sampleObject) {
    console.log (`hobby exist: ${sampleObject.hobby}`);
} else {
    console.log ('Hobby is not available in the object');
}

// other than that you can also directly call the work even it is inside the other, as long as the key is available in the object
console.log (others.work);                 // Output: Business Analyst


// // MY-NOTES: sample list destructuring
// imagine may 1000+ kang data within a list, hindi mo need ideclare lahat, you can you ...rest to call and assign them tas you can use index, take note mo lang na start to index 0 ulit ito pero after the last destructured assignment value like the thirdFruit example.
const fruitBasket = ['apple','banana','orange','strawberry','cherry','pineapple'];

const [firstFruit, secondFruit, thirdFruit, ...rest] = fruitBasket;
console.log (firstFruit);       // Output: apple
console.log (secondFruit);      // Output: banana
console.log (rest);             // Output: (3) ['strawberry', 'cherry', 'pineapple']
console.log (rest[0]);          // Output: strawberry

//You can also console them simultaneously
console.log (firstFruit, secondFruit, thirdFruit, rest);
// Output: apple banana orange (3) ['strawberry', 'cherry', 'pineapple']


//You can also choose what to include in the destructure array
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Pink', 'Brown', 'Lime', 'Violet'];
//Without destructuring
console.log (colors);           // Output: (10) ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Pink', 'Brown', 'Lime', 'Violet']

const [color1, color2, , color4, , color6] = colors;
console.log (color1, color2, color4, color6);  // Output: Red Orange Green Indigo


/*********************************************************************/

// MY-NOTES: Assigning Default values use case in destructuring array
// useful for fetching AP, Imagine humihingi ka ng data sa internet (API). Minsan kulang ang binabalik — minsan 2 lang, minsan 3. Para hindi mag-error ang code mo, pwede kang maglagay ng default value. Kumbaga kung hihinga ka ng name, age and birthdate - need mo siya iistore sa undefined variable tulad ng let num1, num2, num 3;

let num1, num2, num3;                   // Output: Undefined values
console.log (num1, num2, num3);         // Output: undefined undefined undefined

let arrayNum = [100, 200];


// Destrucuring Array and applying default value
[num1 = 10, num2 = 20, num3 = 30 ] = arrayNum;      // Note na pwede kang hindi magassign ng default value, at pwede ka mag-assign ng default value. Magagamit mo yung default value kapag hindi available yung isang index or key - yung default value ang magououtput
console.log (num1, num2, num3);         // Output: 100 200 30


/*********************************************************************/

// MY-NOTES: Swapping Variables in Destructuring Array

// MY-NOTES: Manual Way of Swapping Variables not Using Destructuring
let x = 100, y = 200;

const temp = x;
console.log (temp);             // Output: 100

x = y;                          // Output: 200
y = temp;                       // Outpu: 100
console.log (x,y);              // Output: 200 100

// MY-NOTES: Swapping Variables Using Destructuring
[x, y] = [y, x];
console.log (x,y);              // Output: 100, 200 (binalik ko sa dati)

// MY-NOTES: Destructuring with Function or Extracting data from an array returned from a function
// ginagamit pangkuha ng data sa API
function checkOutItems (firstItem, secondItem, thirdItem) {
    return [firstItem, secondItem, thirdItem];
}

const [firstItem, secondItem, thirdItem] = checkOutItems ("shoes", "tshirt","sunglasses");

console.log (firstItem, secondItem, thirdItem);     // Output: shoes tshirt sunglasses