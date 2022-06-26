// rest = accumulates or folds values into a single variable

// function someFunc(arg1, arg2, ...restOfArgs) {
//     console.log(restOfArgs);
// }

// someFunc("hello", "Andrew", 15, () => {}, 5);

const person = {
    name: "Andrew",
    age: 10,
    hobby: "games",
};

const {name, ...restOfFeatures} = person;

console.log(name);
console.log(restOfFeatures);