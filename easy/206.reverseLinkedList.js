// 206. Reverse Linked List
// Easy

// 4201

// 86

// Add to List

// Share
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
var reverseList = function (head) {
  var current = head;

  if (!current) {
    return current;
  }
  var curPre = head.next;
  current.next = null;

  while (curPre) {
    let tmp = curPre.next;

    curPre.next = current;
    current = curPre;
    curPre = tmp;
  }

  return current;
};
//copied
// Iterative

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     let prev = null;
//     while (head) {
//         const next = head.next;
//         const curr = head;
//         curr.next = prev;
//         head = next;
//         prev = curr;
//     }

//     return prev;
// };
// Recursive

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head, prev = null) {
//     if (head === null) {
//         return null;
//     }
//     const next = reverseList(head.next, head);
//     head.next = prev;
//     return next || head;

// };
