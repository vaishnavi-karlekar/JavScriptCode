const prompt = require("prompt-sync")();

let kmValue = prompt('enter the kilometers: ');
let factor = 0.621371;

let mileValue = kmValue * factor;

console.log(`conversion of ${kmValue} into miles is ${mileValue}`);

