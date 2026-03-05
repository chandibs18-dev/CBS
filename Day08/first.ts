// Variable with type
export {};
let myname: string = "Chandi";
let age: number = 22;
let isStudent: boolean = true;

// Function with types
function greet(person: string): string {
  return "Hello " + person;
}

// Output
console.log(greet(myname));
console.log("Age:", age);
console.log("Student:", isStudent);