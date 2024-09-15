// Challenge: Password Validator (Do-While Loop)

// Objective: Create a password validator program that allows the user to set a password and then prompts them to confirm it.
// Instructions:

//     Prompt the user to set a password.
//     Prompt the user to re-enter the password for confirmation.
//     If the passwords do not match, ask the user to re-enter the password.
//     Continue asking the user to confirm their password until it matches the original one.
//     Use a do-while loop to ensure the program requests confirmation at least once.

// Hints:

//     Use prompt() to ask the user to set and re-enter the password.
//     Use a do-while loop to keep asking until the passwords match.
//     You can compare the two passwords using the === operator.

let password;
let confirmPassword;

// Prompt the user to set a password and confirm it
password = prompt("Set your password:");
do {
    confirmPassword = prompt("Re-enter your password to confirm:");

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    }
} while (password !== confirmPassword);

alert("Password confirmed successfully!");
