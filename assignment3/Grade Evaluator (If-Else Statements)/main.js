// Challenge: Grade Evaluator (If-Else Statements)

// Objective: Write a program that takes a student’s score as input and displays their letter grade based on the following criteria:

//     A: 90 - 100
//     B: 80 - 89
//     C: 70 - 79
//     D: 60 - 69
//     F: below 60

// Instructions:

//     Prompt the user to enter their score (between 0 and 100).
//     Use if-else statements to check the score and assign the correct letter grade.
//     Display the letter grade to the user using alert() or console.log().

let score;
let grade;

// Function to get a valid score between 0 and 100
function getValidScore() {
    while (true) {
        score = parseInt(prompt("Enter the student's score (between 0 and 100):"), 10);
        
        // Check if the score is a number and within the valid range
        if (!isNaN(score) && score >= 0 && score <= 100) {
            break; // Exit the loop if the score is valid
        } else {
            alert("Invalid input. Please enter a number between 0 and 100.");
        }
    }
}

// Get a valid score from the user
getValidScore();

// Determine the grade based on the score
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

alert(`The letter grade is: ${grade}`);
