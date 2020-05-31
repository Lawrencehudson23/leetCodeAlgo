// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3
var deleteDuplicates = function (head) {
  const traverse = (curr, prev) => {
    if (curr === null) {
      return;
    }

    if (prev && prev.val === curr.val) {
      // remove current node by linking previous node to the next node
      prev.next = curr.next;
      traverse(curr.next, prev);
    } else {
      traverse(curr.next, curr);
    }
  };

  traverse(head, null);
  return head;
};
