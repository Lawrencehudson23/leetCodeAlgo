// 504. Base 7
// Easy

// 243

// 148

// Add to List

// Share
// Given an integer, return its base 7 string representation.

// Example 1:
// Input: 100
// Output: "202"
// Example 2:
// Input: -7
// Output: "-10"
// Note: The input will be in range of [-1e7, 1e7].
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
	let arr = [];
	let b = true;
	if (num === 0) {
		return "0";
	}
	if (num < 0) {
		b = false;
	}
	while (num) {
		if (num < 0) {
			num = -num;
		}
		arr.unshift(num % 7);
		num = Math.floor(num / 7);
	}

	let result = arr.join("");
	if (b === false) {
		result = -result;
	}
	return result.toString();
};

console.log(convertToBase7(-7));

// Success
// Details
// Runtime: 140 ms, faster than 6.42% of JavaScript online submissions for Base 7.
// Memory Usage: 36.7 MB, less than 44.96% of JavaScript online submissions for Base 7.
