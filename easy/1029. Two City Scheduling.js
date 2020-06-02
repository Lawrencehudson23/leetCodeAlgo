// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

// Example 1:

// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
var twoCitySchedCost = function (costs) {
  let copy = costs;
  let balance = 0;
  let dic = { a: 0, b: 0 };
  let max = Math.abs(copy[0][0] - copy[0][1]);
  for (let i of copy) {
    for (let j of copy) {
      check = copy[j][0] - copy[j][1];
      if (Math.abs(check) > max) {
        max = Math.abs(check);
      }
    }
  }
};
