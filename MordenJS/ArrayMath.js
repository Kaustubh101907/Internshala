const hello = [4,3,2,6];

const result = hello.map(function(val, idx, arr){
    console.log(val, idx, arr);
});

console.log("result", result);