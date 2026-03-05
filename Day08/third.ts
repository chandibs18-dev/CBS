export {};

class Human {
    private _bloodCount: number = 1;

    constructor(
        public email: string,
        public name: string,
        private userID: string
    ) {}

    // Getter for email
    get getAppleEmail(): string {
        return "fgd@gmail.com";
    }

    // Getter for bloodCount
    get getBloodCount(): number {
        return this._bloodCount;
    }

    // Setter for bloodCount
    set setBloodCount(count: number) {
        this._bloodCount = count;
    }
}

// Usage
const person = new Human("chandi@gmail.com", "Chandi", "U12345");

console.log(person.email);           // "chandi@gmail.com"
console.log(person.getAppleEmail);  // "fgd@gmail.com"
console.log(person.getBloodCount);  // 1

person.setBloodCount = 5;
console.log(person.getBloodCount);  // 5