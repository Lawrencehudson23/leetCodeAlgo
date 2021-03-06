// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:

// The given address is a valid IPv4 address.
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
	return address.split(".").join("[.]");
};
// defangIPaddr("255.100.50.0");
// console.log("defangIPaddr('255.100.50.0'): ", defangIPaddr("255.100.50.0"));
// Runtime: 64 ms, faster than 96.89% of JavaScript online submissions for Defanging an IP Address.
// Memory Usage: 36.7 MB, less than 34.04% of JavaScript online submissions for Defanging an IP Address.
