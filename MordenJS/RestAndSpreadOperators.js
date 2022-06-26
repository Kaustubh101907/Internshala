// rest = accumulates or folds values into a single variable
// spread = unfolds values

// Example 1

function someFunc(arg1, arg2, ...restOfArgs) {
    console.log(restOfArgs);
}

someFunc("hello", "Andrew", 15, () => {}, 5);

// Example 2

const person = {
    name: "Andrew",
    age: 10,
    hobby: "games",
};

const {name, ...restOfFeatures} = person;

console.log(name);
console.log(restOfFeatures);

// Example 3

const someArr = [5,4,3,10,7];

const [f, s, ...rest] = someArr;

console.log(rest)

// Spread
// for example we need to merge the person obj and a new obj other

const other = {
    name2: "Alex",
    car: "BMW",
};

const merge = {...person, ...other};

console.log(merge);