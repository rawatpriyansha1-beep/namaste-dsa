// Namaste dsa video Function-If-Else 

// 1st program --> sum of two integer
function sum(a, b) {
    return a + b;
}
console.log("Sum of Number is :", sum(10, 30));
// 2nd program --> square of a number
function square(n) {
    return n * n;
}
console.log("square of number is : ", square(10));
console.log("sq of number : ", 4 ** 2);
console.log("square of number: ", Math.pow(10, 2));

// 3rd program ---> check voting elligibility

function vote(n) {
    if (n < 1) {
        return "Invalid Input";
    }
    if (n < 18) {
        return false;
    }
    return true;
}
console.log("Person's voting elligibility is :", vote(-1));
console.log("Person's voting elligibility is :", vote(18));
console.log("Person's voting elligibility is :", vote(31));

// program 4 ---> even or odd 

function evenOdd(n) {
    if (n < 2) {
        return "odd";
    }
    if (n % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log("Number 10 is :", evenOdd(10));
console.log("Number 0 is :", evenOdd(0));
console.log("Number 5 is :", evenOdd(5));