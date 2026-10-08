// write a function to return element you have to found in arary index and if not found return -1

let arr = [1, 20, 3, 45, 67, 9, 15];
function index(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(index(arr, 45));
console.log(index(arr, 0));
console.log(index(arr, 9));