// 888 Easy
// https://leetcode.com/problems/fair-candy-swap/

// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has,
// and B[j] is the size of the j-th bar of candy that Bob has.
// Since they are friends, they would like to exchange one candy bar each so that after the exchange,
// they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)
// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange,
// and ans[1] is the size of the candy bar that Bob must exchange.
// If there are multiple answers, you may return any one of them.
// It is guaranteed an answer exists.

// Example 1:
// Input: A = [1,1], B = [2,2]
// Output: [1,2]

// Example 2:
// Input: A = [1,2], B = [2,3]
// Output: [1,2]

// Example 3:
// Input: A = [2], B = [1,3]
// Output: [2,3]

// Example 4:
// Input: A = [1,2,5], B = [2,4]
// Output: [5,4]

// Note:
// 1 <= A.length <= 10000
// 1 <= B.length <= 10000
// 1 <= A[i] <= 100000
// 1 <= B[i] <= 100000
// It is guaranteed that Alice and Bob have different total amounts of candy.
// It is guaranteed there exists an answer.

// Runtime: 348 ms, faster than 37.16% of JavaScript online submissions for Fair Candy Swap.
// Memory Usage: 40.3 MB, less than 33.33% of JavaScript online submissions for Fair Candy Swap.
function fairCandySwap(arr1, arr2) {
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }

  let sum2 = 0;
  for (let j = 0; j < arr2.length; j++) {
    sum2 += arr2[j];
  }

  if ((sum1 - sum2) % 2 !== 0) return false;
  let targetDiff = (sum1 - sum2) / 2;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] - arr2[j] === targetDiff) {
        return [arr1[i], arr2[j]];
      }
    }
  }

  return;
}

const Atest = [1],
  Btest = [1000];

const A1 = [1, 1],
  B1 = [2, 2];
const A2 = [1, 2],
  B2 = [2, 3];
const A3 = [2],
  B3 = [1, 3];
const A4 = [1, 2, 5],
  B4 = [2, 4];

console.log(fairCandySwap(A2, B2));
