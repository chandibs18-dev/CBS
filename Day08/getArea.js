"use strict";
function getArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
    }
}
const circle = { type: "circle", radius: 5 };
const square = { type: "square", sideLength: 4 };
console.log(getArea(circle)); // 78.5398...
console.log(getArea(square)); // 16
