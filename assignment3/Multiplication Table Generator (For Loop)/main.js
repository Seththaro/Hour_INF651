// Challenge: Multiplication Table Generator (For Loop)

// Objective: Create a program that generates and displays a multiplication table for a number the user enters.
// Instructions:

//     Ask the user to input a number.
//     Use a for loop to iterate through the numbers 1 to 10.
//     In each loop iteration, multiply the user's number by the current loop counter and display the result.
//     The output should display the multiplication result in the format:
//     7 x 1 = 7
//     7 x 2 = 14
//     ...
//     7 x 10 = 70.

// Hints:

//     Use prompt() to get the user's number.
//     Multiplying the user's number inside the for loop by the loop counter (i).
//     Display the results using console.log() or alert().

// Get the number from the user
const number = parseInt(prompt("Enter a number to generate its multiplication table:"), 10);

// Generate and display the multiplication table
for (let i = 1; i <= 10; i++) {
    alert(`${number} x ${i} = ${number * i}`);
}
