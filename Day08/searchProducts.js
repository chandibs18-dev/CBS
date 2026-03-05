"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 45 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Phone", price: 800 },
];
// Generic function: search products by name
function getSearchProducts(items, search) {
    return items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
}
// Generic function: get more search results with pagination
function getMoreSearchProducts(items, search, page, limit) {
    const results = getSearchProducts(items, search);
    const start = (page - 1) * limit;
    return results.slice(start, start + limit);
}
// Usage examples
console.log("Search 'm':", getSearchProducts(products, "m"));
// Laptop, Mouse, Monitor
console.log("Page 1, limit 2:", getMoreSearchProducts(products, "m", 1, 2));
// Laptop, Mouse
console.log("Page 2, limit 2:", getMoreSearchProducts(products, "m", 2, 2));
// Monitor
