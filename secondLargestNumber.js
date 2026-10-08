// find the second Largest number in array
// my solution 
function secondLargest(arr) {
    if (arr.length < 2) {
        return -1;
    }
    let max = arr[0]; // 10
    let secmax = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secmax = max;
            max = arr[i];
        } else if (arr[i] > secmax) {
            secmax = arr[i];
        }
    }
    return secmax;
}
let arr = [10, 20, 50, 21, 30, 70];
console.log("second largest element in arr is: ", secondLargest(arr));
let arr1 = [70];
console.log("second largest element in arr1 is: ", secondLargest(arr1));
let arr2 = [10, 5];
console.log("second largest element in arr2 is: ", secondLargest(arr2));
let arr3 = [5, 10];
console.log("second largest element in arr3 is: ", secondLargest(arr3));
let arr4 = [];
console.log("second largest element in arr4 is: ", secondLargest(arr4));
// -1 means either the array is empty or the array has no second largest value

// tutorial solution

function second(arr) {
    let max = -Infinity;
    let secLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secLargest = max;
            max = arr[i];
        } else if (arr[i] > secLargest && arr[i] != max) {
            secLargest = arr[i];
        }
    }
    return secLargest;

}
console.log("Tutorial solution of finding second largest element is : ", second([10, 20, 30, 60, 10, 40, 60, 50]));


// check for these corner cases

/*
1. array is empty
2. array is duplicate
3. array has negative numbers
4. in some special case for higher time complexities it might ask for infinite elements in array.
*/