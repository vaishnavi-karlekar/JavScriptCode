const prompt = require("prompt-sync")();

const string = prompt('enter the character: ');

const result = string.charCodeAt(0);
//or
const result1 = string.codePointAt(0);

console.log(`ASCII value of ${string} is:  ${result1}`);