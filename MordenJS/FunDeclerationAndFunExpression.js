hello();
// Function decleration
// this decleration can be anywhere in the program
function hello () {
    console.log("Kaustubh");
}

// Function expression
// this expression must be before the calling of the fun just like here;
const hello2 = function() {
    console.log("Kaustubh2");
}

hello();

hello2();