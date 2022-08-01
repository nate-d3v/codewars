//Factorial
function factorial(n) {
	if (n < 0 || n > 12) {
		throw new RangeError();
	} else if (n === 0) {
		return 1;
	} else {
		let total = 1;
		for (let i = 1; i <= n; i++) {
			total *= i;
		}
		return total;
	}
}

//Anagram Detection
// write the function isAnagram
var isAnagram = function (test, original) {
	return (
		test
			.split('')
			.map(x => x.toLowerCase())
			.sort()
			.join('') ===
		original
			.split('')
			.map(x => x.toLowerCase())
			.sort()
			.join('')
	);
};
