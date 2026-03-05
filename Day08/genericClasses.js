"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 4️⃣ Sellable class implementing Course
class Sellable {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    sell(quantity) {
        console.log(`Sold ${quantity} x ${this.title}`);
        return this.price * quantity;
    }
}
// 5️⃣ Generic function using Database interface
function logDbInfo(db) {
    console.log(`Connecting to ${db.url} as ${db.username}`);
}
// 6️⃣ Usage examples
const myDb = {
    username: "admin",
    password: "1234",
    url: "http://localhost:5432",
    connect() {
        console.log(`Connected to ${this.url} as ${this.username}`);
    },
};
logDbInfo(myDb);
myDb.connect();
const course1 = new Sellable(1, "TypeScript Mastery", 100);
const course2 = new Sellable(2, "Node.js Complete", 80);
console.log(course1.sell(3)); // 300
console.log(course2.sell(2)); // 160
