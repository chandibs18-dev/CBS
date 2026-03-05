export {};

// Generic function
function identity<T = any>(value: T): T {
    return value;
}

// Usage
console.log(identity(123));           // 123 (number)
console.log(identity("Hello"));       // "Hello" (string)
console.log(identity([1, 2, 3]));    // [1, 2, 3] (array)
console.log(identity({ a: 1, b: 2 })); // { a: 1, b: 2 } (object)