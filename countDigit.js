// write a function that returns the count of digits in a number 
// 123 => 1+2+3 => 6

function countDigit(num) { //123
    num = Math.abs(num);// converts negative number to positive or handling negative numbers
    let count = 0;
    if (num === 0) {
        return 1;
    }
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log("count of digit of number is :", countDigit(1234567890));
console.log("count of digit of number is :", countDigit(0));
console.log("count of digit of number is :", countDigit(-14320));
/*
function sumDigit(num) {
    let count = 0;
    if (num < 0) {
        return -1;
    }
    while (num > 0) {
        count += num % 10;
        num = Math.floor(num / 10);
    }
    return count;
}

console.log("Count of digit is : ", countDigit(145));
console.log("Count of digit is : ", countDigit(-5));
console.log("Count of digit is : ", countDigit(0));
console.log("Count of digit is : ", countDigit(512345));*/

