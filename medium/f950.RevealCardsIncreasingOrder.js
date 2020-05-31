// 950 Medium
// https://leetcode.com/problems/reveal-cards-in-increasing-order/

// In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.

// Initially, all the cards start face down (unrevealed) in one deck.

// Now, you do the following steps repeatedly, until all cards are revealed:

// Take the top card of the deck, reveal it, and take it out of the deck.
// If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
// If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.

// The first entry in the answer is considered to be the top of the deck.

// Example 1:
// Input: [17,13,11,2,3,5,7]
// Output: [2,13,3,11,5,17,7]
// Explanation:
// We get the deck in the order [17,13,11,2,3,5,7] (this order doesn't matter), and reorder it.
// After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
// We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
// We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
// We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
// We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
// We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
// We reveal 13, and move 17 to the bottom.  The deck is now [17].
// We reveal 17.
// Since all the cards revealed are in increasing order, the answer is correct.

// Note:
// 1 <= A.length <= 1000
// 1 <= A[i] <= 10^6
// A[i] != A[j] for all i != j

// Runtime: 68 ms, faster than 80.56% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 37.3 MB, less than 100.00% of JavaScript online submissions for Reveal Cards In Increasing Order.
function revealCards1(ogDeck) {
  let newDeck = [];
  let sortedDeck = [
    ...ogDeck.sort((a, b) => {
      return a - b;
    }),
  ];

  let revealSwitch = true;
  let i = 0;
  while (i < ogDeck.length && sortedDeck.length) {
    if (newDeck.length < ogDeck.length) {
      if (revealSwitch === true) {
        newDeck.push(sortedDeck.shift());
      } else {
        newDeck.push("h");
      }
      revealSwitch = !revealSwitch;
    }

    if (newDeck.length === ogDeck.length) {
      i = 1;
      while (sortedDeck.length) {
        if (newDeck[i] === "h") {
          if (revealSwitch === true) {
            newDeck[i] = sortedDeck.shift();
          }
          revealSwitch = !revealSwitch;
        }
        i++;
        if (i > newDeck.length) i = 1;
      }
    }

    i++;
  }

  console.log(newDeck);
  return newDeck;
}

const deck1 = [17, 13, 11, 2, 3, 5, 7];
const deck2 = [17, 13, 11, 2, 3, 5, 7, 18];
// 2, h, 3, h, 5, h, 7, h
// 2, 11, 3, h, 5, 13, 7, h
// 2, 11, 3, 17, 5, 13, 7, 18
const deck3 = [17, 13, 11, 2, 3, 5, 7, 18, 19];
// 2, h, 3, h, 5, h, 7, h, 11
// 2, h, 3, 13, 5, h, 7, 17, 11
// 2, h, 3, 13, 5, 18, 7, 17, 11
// 2, 19, 3, 13, 5, 18, 7, 17, 11
const deck4 = [17, 13, 11, 2, 3, 5, 7, 18, 6, 9];

revealCards1(deck3);
