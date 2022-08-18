//Sum of Minimums!
function sumOfMinimums(arr) {
	return arr.map(x => x.sort((a, b) => a - b)[0]).reduce((t, n) => t + n, 0);
}

//Greatest common divisor
function mygcd(x, y) {
	if (y === 0) {
		return x;
	}
	return mygcd(y, x % y);
}
