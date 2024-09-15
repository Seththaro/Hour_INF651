// Challenge: Guessing Game (While Loop)

// Objective: Create a simple guessing game where the program generates a random number between 1 and 10, and the user tries to guess the number.
// Instructions:

//     Write a program that generates a random number between 1 and 10 using the Math.random() function.
//     Prompt the user to guess the number.
//     If the user’s guess is incorrect, keep prompting them to guess again.
//     When the user guesses the correct number, a success message will be displayed, and the loop will be stopped.
//     Use a while loop to keep asking the user for their guess until they guess correctly.

// Hints:

//     To generate a random number between 1 and 10, you can use:
//     Math.floor(Math.random() * 10) + 1.
//     Use prompt() to ask for the user's guess and alert() to display messages.
//     Make sure to compare the user's guess to a number using parseInt() or Number().

let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
    if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else {
        alert("Try again.");
    }
}
