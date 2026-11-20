function oddNumSum(n) {
    let isOdd = (arr[n] % 2 != 0);
    if (n == 0) {
        if (isOdd) {
            return arr[n]
        } else return 0;
    }
    if (isOdd) {
        return arr[n] + oddNumSum(n - 1);
    } else return 0 + oddNumSum(n - 1);
}
function sum(n) {
    if (n == 0) return arr[n]
    return arr[n] + sum(n - 1);
}
let arr = [1, 1, 1, 1, 1, 10, 5];
console.log(sum(arr.length - 1));// 6-1
console.log(oddNumSum(arr.length - 1));


