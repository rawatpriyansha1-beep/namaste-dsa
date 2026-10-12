// leetcode 27 --> easy
// remove elements

/*
1st solution : using 2 pointers approach
 i keeps track  while j explores across nums array elements 

function removeElement(nums, val) {
  let k = 0; // position for next valid element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}
*/

