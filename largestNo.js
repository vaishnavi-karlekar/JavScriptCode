const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt('enter the first number: '));
const num2 = parseFloat(prompt('enter the second number: '));
const num3 = parseFloat(prompt('enter the third number: '));

//let largestNumber;

if(num1>num2 && num1>num3){
    console.log('first number is largest number');
}
else if(num2>num1 && num2>num3){
    console.log('second number is largest number');
}
else{
    console.log('third number is largest number');
}
