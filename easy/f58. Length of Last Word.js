// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	if (s.length === 0) {
		return 0;
	}
	let count = 0;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== " ") {
			count++;
		}
		if (s[i] == " " && s[i + 1] && s[i + 1] !== " ") {
			return count;
		}
	}
	return count;
};

// Runtime: 80 ms, faster than 41.08% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 37 MB, less than 13.09% of JavaScript online submissions for Length of Last Word.
