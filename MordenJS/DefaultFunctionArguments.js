function myName() {
    console.log("Kaustubh");
}
// returning a object
const myName2 = (myName = "John") => {
    console.log("my name is", myName);
};

// myName2("haha");
myName2();