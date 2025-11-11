// 1. A function that calculates the average score and returns a message.
function calculateAverage(name, score1, score2) {
  // Calculate the average of the two scores.
  const average = (score1 + score2) / 2;

  // Create a message using the student's name and the calculated average.
  const message = `The average score for ${name} is ${average}.`;

  // Return the message.
  return message;
}

// 2. Outside the function: Call it, store the result, and display it.

// Call the function with the first set of arguments.
const student1Message = calculateAverage("Diana", 88, 94);

// Use console.log() to display the message for the first student.
console.log(student1Message);

// Call the function with different arguments for another student.
const student2Message = calculateAverage("Leo", 76, 85);
console.log(student2Message);


