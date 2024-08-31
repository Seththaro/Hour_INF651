// Variables and Data Types
// Challenge: Create three variables: one for a person's name, one for their age, and one for whether they are a student (boolean).
let personName = "Jack";
let age = 25;
let isStudent = true;

// Log each variable's value and type to the console.
console.log("Name:", personName, "- Type:", typeof personName);
console.log("Age:", age, "- Type:", typeof age);
console.log("Is Student:", isStudent, "- Type:", typeof isStudent);

// Basic Arithmetic Operations
// Challenge: Declare two number variables and perform addition, subtraction, multiplication, and division with them.
let number1 = 10;
let number2 = 5;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;

// Log each result to the console.
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Working with Strings
// Challenge: Declare a string variable containing a sentence.
let sentence = "This is a simple JavaScript sentence.";

// Log the length of the string, the first character, and the last character to the console.
console.log("String Length:", sentence.length);
console.log("First Character:", sentence[0]);
console.log("Last Character:", sentence[sentence.length - 1]);

// Math Object
// Challenge: Declare a variable with a negative number and use the Math object to log its square root, the number squared, and its absolute value to the console.
let negativeNumber = -16;

// Using Math object
let squareRoot = Math.sqrt(negativeNumber);
let squared = Math.pow(negativeNumber, 2); 
let absoluteValue = Math.abs(negativeNumber);

// Log results to the console.
console.log("Square Root of Absolute Value:", squareRoot);
console.log("Squared:", squared);
console.log("Absolute Value:", absoluteValue);

// Boolean Logic and Comparison Operators
// Challenge: Declare two number variables and log whether the first number is greater than, less than, or equal to the second number.
let num1 = 8;
let num2 = 12;

console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 less than num2?", num1 < num2); 
console.log("Is num1 equal to num2?", num1 === num2);

// Logical Operators
// Challenge: Declare two boolean variables and log the results of logical AND, OR, and NOT operations.
let isAdult = true;
let hasPermission = false;

console.log("Logical AND (isAdult && hasPermission):", isAdult && hasPermission);
console.log("Logical OR (isAdult || hasPermission):", isAdult || hasPermission);
console.log("Logical NOT (!isAdult):", !isAdult);

// Using Template Literals
// Challenge: Declare two variables for a person's first and last name, and log a greeting message using template literals.
let firstName = "John";
let lastName = "Doe";

console.log(`Hello, ${firstName} ${lastName}! Welcome to "Hello There" site.`);