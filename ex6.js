function clearWords (words) {
    var lowerCased = words.map(word => word.toLowerCase().trim().replace(/\s/g, ''));
    var set = new Set(lowerCased);
    var clearedWords = Array.from(set);
    var checkArray = [];
    var resultArray = [];
    
    for (iwords in clearedWords) {
        var tempWordArray = [];
        for (ichar in clearedWords[iwords]) {
            if (checkArray.includes(clearedWords[iwords][ichar])) {
                console.log('DUP!!!');
            } else {
                checkArray.push(clearedWords[iwords][ichar]);
                tempWordArray.push(clearedWords[iwords][ichar]);
            }
        }
        resultArray.push(tempWordArray.toString().replace(/,/g, ''));
    }
    return resultArray;
}

var words = ['   am ora   ', 'a ma r', 'am or'];
check = clearWords(words);
console.log(check);