// JavaScript Tutorial for Beginners: Quick Start

// 1. Single line comment: This program demonstrates key beginner JavaScript concepts.

/* 2. Defining variables and using different data types */
let userName = "John"; // String data with double quotes
let score = 0; // Number data
let isQuizComplete = false; // Boolean data

// 3. Displaying "Hello, World!" alert
alert("Hello, World! Welcome to our quick JavaScript tutorial, " + userName + "!");

// 4. Using typeof keyword to display data types
console.log("Data type of userName:", typeof userName); // String
console.log("Data type of score:", typeof score); // Number
console.log("Data type of isQuizComplete:", typeof isQuizComplete); // Boolean

// 5. Clearing the console (if supported by the environment)
console.clear(); // Clears previous logs

// 6. Undefined data type example
let uninitializedVariable;
console.log("Uninitialized variable:", uninitializedVariable); // Undefined

// 7. Assigning and reassigning variable data
score = 10; // Assign a value
console.log("Updated score:", score);
score += 5; // Reassign with mathematical operator
console.log("Score after bonus:", score);

// 8. String concatenation and mathematical equations
let message = "Your final score is " + score + " points.";
console.log(message);

// 9. Working with Boolean data and comparison operators
let passingScore = 15;
let hasPassed = score >= passingScore; // Using greater than or equal to operator
console.log("Has the user passed the quiz?", hasPassed);

// 10. Comparison with strict equals (===)
let expectedName = "John";
let isNameCorrect = userName === expectedName; // Strict comparison
console.log("Is the username correct?", isNameCorrect);

// 11. Using NOT operator (!)
console.log("Is the username incorrect?", !isNameCorrect);

// 12. JavaScript alerts for feedback
if (hasPassed) {
  alert("Congratulations, " + userName + "! You passed the quiz.");
} else {
  alert("Sorry, " + userName + ". You did not pass. Try again!");
}

// 13. Quick review of mathematical operators
let equationResult = (score * 2) / 3 - 5;
console.log("Result of a complex equation:", equationResult);

// End of program
