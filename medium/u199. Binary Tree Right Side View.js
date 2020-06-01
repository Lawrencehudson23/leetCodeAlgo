// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

var rightSideView = function (root) {
  let result = [root, 0];
  let final = [];
  let runner = root;
  while (result.length > 1) {
    if (result[1] === "r") {
      final.push(result[0].val);
    }
    if (result[0] === "r") {
      result.shift();
      result.push("r");
    }
    runner = result.shift();

    result.push(runner.left && runner.left);
    result.push(runner.right && runner.right);
  }

  return result;
};
