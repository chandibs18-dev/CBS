export {};

let myarray: (string | number)[] = [1, 2, "3", "4"];

// Convert numbers to strings using map
let stringArray: string[] = myarray.map((e) => {
  if (typeof e === "number") {
    return e.toString();
  }
  return e; // already string
});

console.log(stringArray); // Output: ["1", "2", "3", "4"]