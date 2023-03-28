function numbersSum(n) {
    n = parseInt(n);
    i = 0
    var result = 0;
    stringResult = '';

    while (i <= n) {
        result = result + i;
        i != n ? stringResult = stringResult + String(i+'+'):
        stringResult = stringResult + String(i+' = ');
        i ++;   
    }
    var end = `Sum of: ${stringResult}${result}`;
    return end
}

numbers = numbersSum(15);
console.log(numbers);