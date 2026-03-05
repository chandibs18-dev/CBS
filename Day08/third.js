"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._bloodCount = 1;
    }
    // Getter for email
    get getAppleEmail() {
        return "fgd@gmail.com";
    }
    // Getter for bloodCount
    get getBloodCount() {
        return this._bloodCount;
    }
    // Setter for bloodCount
    set setBloodCount(count) {
        this._bloodCount = count;
    }
}
// Usage
const person = new Human("chandi@gmail.com", "Chandi", "U12345");
console.log(person.email); // "chandi@gmail.com"
console.log(person.getAppleEmail); // "fgd@gmail.com"
console.log(person.getBloodCount); // 1
person.setBloodCount = 5;
console.log(person.getBloodCount); // 5
