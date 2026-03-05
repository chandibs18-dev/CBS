export {};

// 1️⃣ Database interface
interface Database {
    username: string;
    password: string;
    url: string;
}

// 2️⃣ AnotherFunction interface extending Database
interface AnotherFunction extends Database {
    connect(): void;
}

// 3️⃣ Course interface
interface Course {
    id: number;
    title: string;
    price: number;
}

// 4️⃣ Sellable class implementing Course
class Sellable implements Course {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {}

    sell(quantity: number): number {
        console.log(`Sold ${quantity} x ${this.title}`);
        return this.price * quantity;
    }
}

// 5️⃣ Generic function using Database interface
function logDbInfo<T extends Database>(db: T): void {
    console.log(`Connecting to ${db.url} as ${db.username}`);
}

// 6️⃣ Usage examples

const myDb: AnotherFunction = {
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