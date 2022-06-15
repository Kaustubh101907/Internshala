const importedSecondModule = require("./second.js")

console.log(importedSecondModule.myName);

var cowsay = require("cowsay");

console.log(
    cowsay.say({
        text : "I'm a moooodule",
        e : "oO",
        T : "U "
    })
);