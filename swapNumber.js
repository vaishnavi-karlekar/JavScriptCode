const prompt = require("prompt-sync")();

let a = prompt('enter the first number');
let b = prompt('enter the second number');

[a, b] = [b, a];

console.log(`value of a after swapping` ${a});
console.log(`value of b after swapping ${b}`);

