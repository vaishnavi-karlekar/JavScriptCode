const prompt = require("prompt-sync")();

const number = parseInt(prompt('enter the number: '));

if(number<0){
    console.log('this number is negative');
}
else if(number == 0){
    console.log('this number is zero');
}
else{
    console.log('this number is positive');
}