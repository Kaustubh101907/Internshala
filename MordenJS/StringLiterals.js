const name = "Kaustubh";
const age = 10;

const result = "My name is " + name + " and my age is " + age;

// string template
const result2 = `My name is ${name} and my age is ${age}`;

// we can also use ternary operators here
const result3 = `My name is ${10 < 5 ? name : age} and my age is ${age}`;

// we can also use functions here
const getMyName = () => "Haha";
const result4 = `My name is ${getMyName()} and my age is ${age}`; 

console.log(result);
console.log(result2);
console.log(result3)