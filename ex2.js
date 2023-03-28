function oddEven1(n) {
    var convertedN = parseInt(n);
    if (convertedN % 2 == 0){
        return `Number ${convertedN} is Even!`
    } else {
        return `Number ${convertedN} is Odd!`
    }
}

function oddEven2(n) {
    var convertedN = parseInt(n);
    var result = convertedN % 2 == 0 ?
    `Number ${convertedN} is Even!`:
    `Number ${convertedN} is Odd!`;
    
    return result
}


var check1 = oddEven1(1000);
console.log(check1);
console.log('-=-=-=-=-=-=-=-=-');
var check2 = oddEven2(501);
console.log(check2);