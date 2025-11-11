// 1. An array that stores at least 3 objects.
// 2. Each object represents a student with name, age, and enrollment status.
const students = [
  {
    name: "Alice",
    age: 20,
    isEnrolled: true,
  },
  {
    name: "Bob",
    age: 22,
    isEnrolled: false,
  },
  {
    name: "Charlie",
    age: 21,
    isEnrolled: true,
  },
];

// 3. Use console.log() to display the required information.

// The whole array.
console.log("Student Array:", students);

// The name of the first student.
console.log("Name of the first student:", students[0].name);

// The age of the second student.
console.log("Age of the second student:", students[1].age);

// Whether the third student is enrolled.
console.log("Is the third student enrolled?", students[2].isEnrolled);

