//Grading Output Using Function+If Else


//Declare the Function
function Grading_Output (grade) {
    let result;

    if (grade <=75) {
        result = 'you passed the course';
    } else {
        result = 'you failed the course';
    }
    return result;
}

//Input of the Function
let input_grade = Number(prompt("Enter your grade: "));


//Calling the Function
let grade_result = Grading_Output(input_grade);

//Consoling the Output of the Function
console.log (`Your grade is ${input_grade} and ${grade_result}`);