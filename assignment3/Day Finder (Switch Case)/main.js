// Challenge: Day Finder (Switch Case)

// Objective: Write a program that takes a number (1-7) as input from the user and displays the corresponding day of the week. For example, if the user enters 1, the output should be Sunday.
// Instructions:

//     Prompt the user to enter a number between 1 and 7.
//     Use a switch case statement to map each number to its corresponding day of the week:

//     1: Sunday
//     2: Monday
//     3: Tuesday
//     4: Wednesday
//     5: Thursday
//     6: Friday
//     7: Saturday

//     Display the day of the week to the user using alert() or console.log().

// Hints:

//     Ensure the user inputs a valid number (between 1 and 7).
//     Use the switch to match the number with the correct day.
//     If the user enters a number outside the 1-7 range, display a message saying "Invalid input."

let dayNumber;
let dayName;

// Function to get a valid number between 1 and 7
function getValidDayNumber() {
    while (true) {
        dayNumber = parseInt(prompt("Enter a number between 1 and 7:"), 10);
        
        // Check if the number is valid (between 1 and 7)
        if (dayNumber >= 1 && dayNumber <= 7) {
            break; // Exit the loop if the number is valid
        } else {
            alert("Invalid input. Please enter a number between 1 and 7.");
        }
    }
}

// Get a valid number from the user
getValidDayNumber();

// Determine the day of the week based on the number
switch (dayNumber) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
}

alert(`The day of the week is: ${dayName}`);
