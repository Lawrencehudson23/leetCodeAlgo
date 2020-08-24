// Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

// If there is no non-empty subarray with sum at least K, return -1.

// Example 1:

// Input: A = [1], K = 1
// Output: 1
// Example 2:

// Input: A = [1,2], K = 4
// Output: -1
// Example 3:

// Input: A = [2,-1,2], K = 3
// Output: 3

// Note:

// 1 <= A.length <= 50000
// -10 ^ 5 <= A[i] <= 10 ^ 5
// 1 <= K <= 10 ^ 9

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function (A, K) {
	let sum = 0;
	let count = 0;
	let result = 0;
	for (let i = 0; i < A.length; i++) {
		for (let j = i; j < A.length; j++) {
			if (sum < K) {
				1;
				sum += A[j];
				count++;
			} else {
				if (result == 0 || result > count) {
					result = count;
					sum = 0;
					count = 0;
					break;
				}
			}
		}
	}
};
