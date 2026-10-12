// leetcode 88 --> easy

// merge sorted array

var merge = function (nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;

    let nums1copy = nums1.slice(0, m);

    for (let i = m + n - 1; i >= 0; i--) {

        if (p1 < 0) {
            nums1[i] = nums2[p2];
            p2--;
        }
        else if (p2 < 0) {
            nums1[i] = nums1copy[p1];
            p1--;
        }
        else if (nums1copy[p1] > nums2[p2]) {
            nums1[i] = nums1copy[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    } return nums1;
};