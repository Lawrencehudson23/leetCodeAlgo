// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = (root) => {
	if (root == null) {
		return root;
	}
	[root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
	return root;
};
// Runtime: 72 ms, faster than 86.06% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 36.9 MB, less than 70.68% of JavaScript online submissions for Invert Binary Tree.
