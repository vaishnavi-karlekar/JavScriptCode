

function numbersOnly(arr, prop){

    let extractedValue = arr.map(item => item[prop]);

    return extractedValue
    }

    let objArr = [{a: 1}, {b: 2}, {c: 3}]

    let result = numbersOnly(objArr, 'a','b','c')
    console.log(result);

