// Object destructuring
const car = {
    color: "red",
    gears: 5,
    engine: "diesel",
};

// old way
// const engine = car.engine;
// const gears = car.gears;
// const color = car.color;

const {color, gears, engine: carEngine} = car;

console.log("color", color);
console.log("gears", gears);
//console.log("engine", engine); // can do it like this also
console.log("engine", carEngine); // naming another term with it

// Array destructuring
const someArr = [4,3,1,5,6];

const [f, s, t] = someArr;

console.log(f, s, t);