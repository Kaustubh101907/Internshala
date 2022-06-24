const hello = [1, 3, 5, 7, 9];

const result = hello.reduce(function (acc, currVal, currInd) {
    
    const  mappedCurrentElem = {};
    mappedCurrentElem[currInd] = currVal;

    console.log(acc); 

    return Object.assign(acc, mappedCurrentElem);
}, {});

console.log("result", result);