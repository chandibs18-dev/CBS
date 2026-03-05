"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myarray = [1, 2, "3", "4"];
// Convert numbers to strings using map
let stringArray = myarray.map((e) => {
    if (typeof e === "number") {
        return e.toString();
    }
    return e; // already string
});
console.log(stringArray); // Output: ["1", "2", "3", "4"]
