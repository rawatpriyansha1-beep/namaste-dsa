// Liner Search

function LinearSearch(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            return i;
        }
    }
    return -1;
}

let val = (LinearSearch([1, 2, 3, 30, 120, 21, 10, 33], 10));
if (val != -1) {
    console.log("Value found at index: ", val);
} else console.log("Value is not present in array, Try Again Later!");