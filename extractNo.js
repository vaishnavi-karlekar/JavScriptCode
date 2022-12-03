  //filter , map , reduce functions of array
let objArr = [{a: 1}, {b: 2}, {c:3}];

objArr.map(val => {
    
  //  console.log(Object.values(val+1))
  for(let i in val){
    console.log(val[i]=val[i]+1);
  }
})
