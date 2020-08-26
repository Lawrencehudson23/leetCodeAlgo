// Given an input string, reverse the string word by word.

// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

// Note:

// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s
		.split(" ")
		.filter((subStr) => subStr !== "")
		.reverse()
		.join(" ");
};
// Runtime: 72 ms, faster than 76.30% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 37.4 MB, less than 35.04% of JavaScript online submissions for Reverse Words in a String.
