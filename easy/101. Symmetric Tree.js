// 101. Symmetric Tree
// Easy

// 4444

// 107

// Add to List

// Share
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Follow up: Solve it both recursively and iteratively.
/**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
  */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (!root) {
		//Sanity check
		return true;
	}
	//Check if tree l & r are mirroring each other
	function isMirror(l, r) {
		if (!l && !r) {
			return true; //Both nodes are null, ok
		}
		if (!l || !r || l.val !== r.val) {
			return false; //Found a mismatch
		}
		return isMirror(l.left, r.right) && isMirror(l.right, r.left);
	}
	return isMirror(root.left, root.right);
};
// Runtime: 100 ms, faster than 33.49% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 38.7 MB, less than 41.91% of JavaScript online submissions for Symmetric Tree.
