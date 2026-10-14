// Bubble Sort 
// The big value bubbles right.

function bubbleAsc(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

console.log(
    "Bubble sort: ",
    bubbleAsc([1, -2, 55, 0, 2, 8, 10])
);
//console.log("Bubble sort: ", bubbleDesc([1, -2, 55, 0, 2, 8, 10]));