//square root of number
 

const number = prompt('enter the number:  ');
const result = Math.sqrt(number)

console.log(`the square root of ${number} is ${result}`);

//calculate area of a triangle

const baseValue = prompt("enter the base value ");
const heightValue = prompt("enter the height value");

const areaValue = (baseValue * heightValue) / 2;

console.log(`area of triangle ${areaValue}`);


//swapping of two numbers

let a = prompt('enter the first value');
let b = prompt('enter the second value');

[a, b] = [b, a]

console.log(`the value of a after swapping ${a}`);
console.log(`the value of b after swapping ${b}`);

//convert kilometer to miles (1km = 0.621371 miles)

const kilometer = prompt('enter the value of kilometers');
const factor = 0.621371;

const miles = kilometer * factor;

console.log(`conversion of ${kilometer} kilometers into mile is ${miles}`);

//check whether number is positive, negative or zero

const number1 = parseInt(prompt('enter the number '))

if(number1>0){
    console.log("this number is positive");
}
else if(number1 == 0){
    console.log("this number is zero");
}
else {
    console.log("this number is negative")
}

// check whether number is odd / even

const number2 = prompt("enter the number ")
if(number2 % 2 == 0){
    console.log("this number is even");
}
else{
    console.log("this number is odd");
}

//find the largest number

const num1 = parseFloat(prompt('enter the first number '));
const num2 = parseFloat(prompt('enter the second number '));
const num3 = parseFloat(prompt('enter the third number '));

let largestNumber;
 
if(num1>=num2 && num1>=num3){
    largestNumber = num1;
}
else if(num2>=num1 && num2>=num3){
    largestNumber = num2;
}
else{
    largestNumber = num3;
}

console.log("largest number is  ", largestNumber);






