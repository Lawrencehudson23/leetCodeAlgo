// Given a string s of lower and upper case English letters.

// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

// Notice that an empty string is also good.

// Example 1:

// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:

// Input: s = "s"
// Output: "s"

// Constraints:

// 1 <= s.length <= 100
// s contains only lower and upper case English letters.

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
	let arr = s.split("");
	let newArr = [];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let temp = arr[i].toLowerCase();
		if (
			arr[i] !== arr[i + 1] &&
			arr[i + 1] &&
			temp === arr[i + 1].toLowerCase()
		) {
			count++;
			i = i + 1;
		} else {
			newArr.push(arr[i]);
		}
	}

	console.log("newArr: ", newArr);
	let result = newArr.join("");
	console.log("result: ", result);
	if (count === 0) {
		return result;
	}
	return makeGood(result);
};
makeGood("abBAcC");
console.log('makeGood("abBAcC"): ', makeGood("abBAcC"));
// Runtime: 212 ms, faster than 5.07% of JavaScript online submissions for Make The String Great.
// Memory Usage: 46 MB, less than 5.06% of JavaScript online submissions for Make The String Great.
// var makeGood = function(s) {
//     const stack = [];
//     const arr = s.split('');
//     while(arr.length){
//         const curr = arr.shift(), last = stack[stack.length - 1] || '';
//         if(curr !== last && curr.toLowerCase() === last.toLowerCase()) {
//             stack.pop();
//         } else {
//             stack.push(curr);
//         }
//     }
//     return stack.join('');
// };
// Runtime: 92 ms, faster than 59.25% of JavaScript online submissions for Make The String Great.
// Memory Usage: 38.2 MB, less than 89.21% of JavaScript online submissions for Make The String Great.
