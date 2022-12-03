const prompt = require("prompt-sync")();

const num = prompt('enter a number: ');

console.log(`the factor of ${num} is: `)

for(let i=1; i<=num; i++){
 
    if(num % i == 0){
        console.log(i);
    }
}