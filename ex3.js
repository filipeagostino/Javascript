function stringMultiplier1(s, n) {
    var i = 0;
    var result = String(s + ' ');
    while (i < n) {
        result = result + s + ' ';
        i++;
    }
    return result 
}


function stringMultiplier2(s, n) {
    var result = s.repeat(n);
    return result 
}


multi1 = stringMultiplier1('test1!', 15);
multi2 = stringMultiplier2('test2!', 15);
console.log(multi1);
console.log(multi2);