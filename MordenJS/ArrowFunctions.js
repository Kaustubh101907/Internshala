function myName() {
    console.log("Kaustubh");
}

// const myName2 = () => {
//     console.log("Kaustubh2");
// };

// returning a object
const myName2 = () => ({
    name: "Kaustubh2",
});

const m = myName2();

console.log(m);