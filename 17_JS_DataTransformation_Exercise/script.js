// Create a function displayTasks() which, when called, will output:
// MY-NOTES: CALLING EACH OF THE ITEM FROM AN ARRAY
let tasks = ["Task 1: Eat", "Task 2: Sleep", "Task 3: Code"];

function displaytask_array () {
    for ( let i=0 ; 
        i < tasks.length ; // as i is less than the count of items in the array_as_task do i++, or increase one step per loop
        i++) {

        console.log (tasks[i]);
    }
}

displaytask_array ();


// Create a function addTask(string) which can receive a string input and will add a given string to the array. When the function is called, it should also display the updated version of the array:
// MY-NOTES: ADDING AN ITEM FROM USER INPUT AND PUSHING THE INPUT TO THE LAST ELEMENT OF THE ARRAY

function addTask () {
    const new_task = (prompt('Enter the additional task: '));
    console.log (`You added ${new_task}`);

    tasks.push (new_task);
    displaytask_array ();
}


addTask ();
addTask ();

function deleteTask () {
    const deleted_task = tasks.pop ();
    console.log (`You deleted ${deleted_task}`);
    displaytask_array ();
}

deleteTask ();





