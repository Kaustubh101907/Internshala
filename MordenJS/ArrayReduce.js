const hello = [7, 6, 9, 4, 5];

const result = hello.reduce(function(prevVal, currVal) {
    console.log(prevVal, currVal);  // prevVal is also known as accumulator
    return prevVal + currVal;
}, 0);

console.log("result", result);