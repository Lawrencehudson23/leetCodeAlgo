// // 198 Easy
// // https://leetcode.com/problems/house-robber/

// // You are a professional robber planning to rob houses along a street.
// // Each house has a certain amount of money stashed,
// // the only constraint stopping you from robbing each of them is that
// // adjacent houses have security system connected and it will
// // automatically contact the police if two adjacent houses were broken into on the same night.

// // Given a list of non-negative integers representing the amount of money of each house,
// // determine the maximum amount of money you can rob tonight without alerting the police.

// // Example 1:
// // Input: nums = [1,2,3,1]
// // Output: 4
// // Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// //              Total amount you can rob = 1 + 3 = 4.
// // Example 2:
// // Input: nums = [2,7,9,3,1]
// // Output: 12
// // Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// //              Total amount you can rob = 2 + 9 + 1 = 12.

// // Constraints:
// // 0 <= nums.length <= 100
// // 0 <= nums[i] <= 400

function houseRobber(arr) {
  if (nums.length === 0) return 0;
  nums.unshift(-Infinity);
  const len = nums.length;
  for (let i = 3; i < len; i++) {
    nums[i] += Math.max(nums[i - 2], nums[i - 3]);
  }

  return Math.max(nums[len - 1], nums[len - 2]);
}
// copied// Runtime: 68 ms, faster than 26.57% of JavaScript online submissions for House Robber.
// Memory Usage: 33.9 MB, less than 14.29% of JavaScript online submissions for House Robber.
// Next challenges:
// const arr1 = [1,2,3,1]; // 4
// const arr2 = [2,7,9,3,1] // 12

// const arr3 = [1, 5, 6, 72, 289, 342, 179, 22, 134];
// const arr4 = [1, 8, 5, 6, 72, 3, 4, 22, 1];
// const arr5 = [1, 5, 6, 72, 289, 399, 2, 134];
// const arr6 = [1, 5, 6, 72, 289, 399, 2, 134];
// // look 4 places down from current index
// // in order to make best decision
// //
