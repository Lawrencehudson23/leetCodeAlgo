// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function (nums) {
// 	let sum = 0;
// 	let sumNums = [];
// 	nums.map((num) => {
// 		sumNums = [...sumNums, (sum += num)];
// 	});
// 	return sumNums;
// };
// Runtime: 76 ms, faster than 71.72% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 43 MB, less than 5.00% of JavaScript online submissions for Running Sum of 1d Array.

// var runningSum = function(nums) {
//     let sum = 0;
//     let sumNums=[]
// 	nums.map((num) => {
// 		sumNums.push(sum+=num)
// 	});
// 	return sumNums;
// };
// Runtime: 84 ms, faster than 41.73% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 37.3 MB, less than 12.88% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function (nums) {
	let sum = 0;

	let sumNums = nums.map((num) => (sum = num += sum));
	return sumNums;
};
// Runtime: 60 ms, faster than 99.51% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 37.4 MB, less than 9.93% of JavaScript online submissions for Running Sum of 1d Array.
