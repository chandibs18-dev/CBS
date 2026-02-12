function makePizza(onPizzaReady){
    console.log("Cooking the pizza... Please wait");
    setTimeout(() => {
        const pizza = "Deluxe Pepperoni Pizza";
        onPizzaReady(pizza);
    }, 3000);
}

function orderPizza(kitchenFunction){
    console.log("Go to pizza store");
    console.log("Choose your favorite pizza");
    kitchenFunction((pizza) => {
        console.log(`Order complete! Now eating: ${pizza}`);

    });
}

orderPizza(makePizza);

function eatpizza(pizzaname){
    console.log("Eating the"+pizzaname);
}
function makePizza(callback){
    console.log("started cooking..");
    setTimeout(() => {
        const pizza = "Cheese Pizza";
        callback(pizza);
    }, 3000);
}
makePizza(eatpizza);                                 