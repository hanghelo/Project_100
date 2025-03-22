//Grading Output Using Arrow Function


//Declare the Function
function Grading_Output (grade) {
    let grade_result = (grade <=75) ? 'you failed the course' : 'you passed the course';
    return grade_result;
}

//Input of the Function
let input_grade = Number(prompt("Enter your grade: "));


//Calling the Function
let grade_result = Grading_Output(input_grade);

//Consoling the Output of the Function
console.log (`Your grade is ${input_grade} and ${grade_result}`);