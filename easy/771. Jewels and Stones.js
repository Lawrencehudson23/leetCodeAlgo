// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
	let arrS = S.split("");
	let result = 0;
	for (let i of arrS) {
		if (J.includes(i)) {
			result++;
		}
	}
	return result;
};
// Runtime: 80 ms, faster than 71.59% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 37.1 MB, less than 52.33% of JavaScript online submissions for Jewels and Stones.

//one line
// var numJewelsInStones = function (J, S) {
// 	return S.split("").reduce((acc, cur) => acc + J.includes(cur), 0);
// };
// Runtime: 80 ms, faster than 71.59% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 37.1 MB, less than 55.63% of JavaScript online submissions for Jewels and Stones.
