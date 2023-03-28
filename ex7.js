function countChars (word) {
    var wordNormalized = word.toLowerCase().trim();
    var wordNormalized = wordNormalized.replace(/\s/g, '');
    var wordSplited = wordNormalized.split('');
    var cont = 0;
    result = [];

    for (i in wordNormalized){
        for (i2 in wordNormalized) {
            wordNormalized[i] == wordNormalized[i2]?
            cont += 1 : cont = cont;
        }
        var temp = wordNormalized[i] + ': ' + '*'.repeat(cont);
        result.includes(temp)? console.log('NOK!') : result.push(temp);
        cont = 0;
    }
    var end = wordNormalized + ' --> ' + result.toString()
    return end;
}

check = countChars('Chi ca g o         ');
console.log(check);
