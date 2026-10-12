// leetcode problem 9 --> Easy
// solved it with helper functiona dn then without helper function


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    /*
    1st soltion runtime 15 ms beats 12.56%
     if(x<0){
         return false;
     }
     return x.toString().split("").reverse().join("") === x.toString(); */

    /* 
    2nd solution runtime 3 ms beats 97.79 */
    if (x < 0) {
        return false;
    }
    else if (x < 10) {
        return true;
    }
    let x1 = x;
    let rev = 0;
    while (x1 > 0) { // 121
        rev = rev * 10 + x1 % 10;
        x1 = Math.floor(x1 / 10);
    }
    return rev === x;
};