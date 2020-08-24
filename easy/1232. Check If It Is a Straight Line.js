// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coord) {
	if (coord.length === 2) return true;
	if (
		coord.every((el) => el[0] === coord[0][0]) ||
		coord.every((el) => el[1] === coord[0][1])
	)
		return true;

	for (let i = 2; i < coord.length; i++) {
		if (
			!(
				(coord[i][0] - coord[0][0]) / (coord[1][0] - coord[0][0]) ===
				(coord[i][1] - coord[0][1]) / (coord[1][1] - coord[0][1])
			)
		)
			return false;
	}

	return true;
};

//   Runtime: 80 ms, faster than 63.53% of JavaScript online submissions for Check If It Is a Straight Line.
// Memory Usage: 38 MB, less than 40.00% of JavaScript online submissions for Check If It Is a Straight Line.
