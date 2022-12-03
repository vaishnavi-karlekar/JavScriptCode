const prompt = require("prompt-sync")();

function factorial(x){
    if(x == 0){
        return 1;
    }
    else{
        return x * factorial(x-1);
    }
}

const num = prompt('enter a positive number: ');

if(num>=0){
    const result = factorial(num);
    console.log(`factorial of ${num} is ${result}`);
}
else{
    prompt('enter a positive number: ')
}