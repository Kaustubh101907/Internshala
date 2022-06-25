const car = {
    color: "red",
    gears: 5,
    engine: "diesel",
};

// old way
// const engine = car.engine;
// const gears = car.gears;
// const color = car.color;

const {color, gears, engine} = car;

console.log("color", color);
console.log("gears", gears);
console.log("engine", engine);