var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function perfectSquares1(numbers) {
    for (i in numbers) {
        if (Number.isInteger(numbers[i] ** 0.5)) {
            console.log(`${numbers[i]} is a perfect square!`);
        } else {
            console.log(`${numbers[i]} is not a perfect square!`);    
        }
    }
}


function perfectSquares2(numbers) {
    for (i in numbers) {
        Number.isInteger(numbers[i] ** 0.5)?
        console.log(`${numbers[i]} is a perfect square!`):
        console.log(`${numbers[i]} is not a perfect square!`);
    }
}


perfectSquares1(numbers);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
perfectSquares2(numbers);


