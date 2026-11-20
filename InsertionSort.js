function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

console.log(
    "Insertion sort:",
    insertionSort([3, 1, 68, 2, 12, 43545, 2121, 99])
);