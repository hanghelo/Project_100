// MY-NOTES: OBJECT CREATION
const person = {
    firstName: 'Juan',                         // firstName is the key while 'Juan' is the value
    lastName: 'Dela Cruz',
    age: 30,
    activities: ['eat', 'code', 'sleep'],
}
console.log(person);

// MY-NOTES: OBJECT DATA TYPE CHECKING
console.log(typeof person);


// MY-NOTES: OBJECT KEY-VALUE DATA SELECTING

// USING DOT NOTATION
console.log (person.firstName);

// USING BRACKET NOTATION
console.log (person['firstName']);


// MY-NOTES: OBJECT KEY-VALUE DATA CHANGE / UPDATE
// ADDING A NEW KEY USING DOT NOTATION
person.job = 'Teacher';
console.log(person);

// ADDING A NEW KEY USING BRACKET NOTATION
person['email'] = 'abc@email.com';
console.log(person);

// MY-NOTES: OBJECT METHODS

const person2 = {
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    age: 30,
    activities: ['eat', 'code', 'sleep'],

    greet: function () {               
        //We are defining a function as a value
        // console.log ('Hello! I am '+ this.firstName);
        // when the key is called, then the Hello from the function will be printed.
        // the this method is used to select the object itself and using dot (.) notation, we can select the key on the object
    
        // MY-NOTES: THIS 
        // this method is used to select the object itself
        console.log(this);              // checks if the this method really refers to the person2 object


        //MY-NOTES: THIS
        // Creating a new property INSIDE the object using 'this'
        // Rather than defining the message externally, we:
        // 1. Dynamically generate it using the object's own data (this.firstName)
        // 2. Store it as a new property (this.msg) for later use
        this.msg = 'Hello! I am ' + this.firstName + "!";
        return this.msg;
    }
}

//
person2.greet();

console.log (person2.msg);             // Output: Hello I Am Juan