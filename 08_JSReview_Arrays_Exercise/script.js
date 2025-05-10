// MY-NOTES: ARRAY EXERCISE

/*

Given the array daysInAWeek = ['Tue', 'Wed', 'Thu', 'Fri', 'Sun']; perform the following:

Add 'Mon' at the beginning of the array.
Remove 'Sun' and assign it to a variable.
Add 'Sat' at the end of the array.
Put 'Sun' at the beginning of the array.
Print the array in the console.

*/

const daysInAWeek = ['Tue', 'Wed', 'Thu', 'Fri', 'Sun'];
console.log (daysInAWeek);

// Add 'Mon' at the beginning of the array.
daysInAWeek.unshift('Mon');
console.log (daysInAWeek);

// Remove 'Sun' and assign it to a variable.
let removedday = daysInAWeek.pop();
console.log (removedday);
console.log (daysInAWeek);

// Add 'Sat' at the end of the array.
daysInAWeek.push('Sat');
console.log (daysInAWeek);

// Put 'Sun' at the beginning of the array.
daysInAWeek.unshift(removedday);
console.log (daysInAWeek);