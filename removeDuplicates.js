// Leetcode Problem 26 ---> Easy
// Remove Duplicated from Sorted Array

/*
1st solution using set

var removeDuplicates = function(nums) {
    let set = new Set(nums);

    let i = 0;

    for (let val of set) {
        nums[i] = val;
        i++;
    }

    return set.size;

};
*/

// 2nd solution using two pointers

var removeDuplicates = function (nums) {
    // two pointer approach
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        }
        else if (nums[i] !== nums[j]) {
            i = i + 1;
            nums[i] = nums[j];
            j++;
        }
    }
    return i + 1;
};

