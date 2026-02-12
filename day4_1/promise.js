// Function to make pizza returns a Promise
function makePizza(pizzaName) {
    return new Promise((resolve, reject) => {
        console.log(`Cooking the pizza... Please wait: ${pizzaName}`);
        setTimeout(() => {
            // After 3 seconds, the pizza is ready
            resolve(pizzaName);
        }, 3000);
    });
}

// Function to eat pizza
function eatPizza(pizzaName) {
    console.log(`Eating the ${pizzaName}`);
}

// Ordering and eating pizza using Promises
makePizza("Deluxe Pepperoni Pizza")
    .then((pizza) => {
        console.log(`Order complete! Now eating: ${pizza}`);
        eatPizza(pizza);
        return makePizza("Cheese Pizza"); // chain another pizza
    })
    .then((pizza) => {
        console.log(`Order complete! Now eating: ${pizza}`);
        eatPizza(pizza);
    })
    .catch((err) => {
        console.log("Something went wrong: " + err);
    });
