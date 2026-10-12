// Leetcode problem 7 --> Medium
// signed 32 bit integer 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    ncopy = x
    x = Math.abs(x); // handling negative values
    let rev = 0;
    while (x > 0) {
        rev = 10 * rev + x % 10;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31); // let limit = 2**31;
    if (rev < -limit || rev > limit) {
        return 0;
    }
    return (ncopy < 0) ? -rev : rev;
};