//Power of two
function isPowerOfTwo(n) {
	for (let i = 0; i <= n; i++) {
		if (Math.pow(2, i) === n) {
			return true;
		}
	}
	return false;
}

//Predict your age!
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
	return Math.floor(
		Math.sqrt(arr.map(x => x * x).reduce((t, n) => t + n, 0)) / 2
	);
}
