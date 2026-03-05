interface Circle{
    type:"circle";
    radius:number;
}
interface Square{
    type:"square";
    sideLength:number;
}
type ShapeNew = Circle | Square;
function getArea(shape:ShapeNew):number{

    switch(shape.type){
        case "circle":
            return Math.PI*shape.radius**2;
        case "square":
            return shape.sideLength**2;    
    }
}
const circle: Circle = { type: "circle", radius: 5 };
const square: Square = { type: "square", sideLength: 4 };

console.log(getArea(circle)); // 78.5398...
console.log(getArea(square)); // 16