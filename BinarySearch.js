// Binary Search
// Binary search Iterative 
function Binary(arr, val) {
    let l = 0;
    let h = arr.length - 1;

    while (l <= h) {
        // let mid = Math.floor((l + h) / 2);
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === val) {
            return mid;
        }
        if (arr[mid] < val) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return -1;
}
// Binary search using recursive call 
function BinarySearch(arr, val) {
    let l = 0;
    let h = arr.length - 1;
    function search(l, h) {
        if (l > h) {
            return -1;
        }
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] === val) {
            return mid;
        }
        if (arr[mid] < val) {
            return search(mid + 1, h);
        } else {
            return search(l, mid - 1);

        }
    }
    return search(l, h);

}
//console.log(Binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));