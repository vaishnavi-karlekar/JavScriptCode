const prompt = require("prompt-sync")();

const number = prompt('enter the number: ');
let n1 = 0, n2 = 1, nextTerm;

for(let i=1; i<=number; i++){
    console.log(n1)
    nextTerm = n1 + n2;
    //console.log(nextTerm);
    n1 = n2;
    // console.log(n1);
    n2 = nextTerm;
    // console.log(n2);

}