//Sort array by string length
function sortByLength(array) {
	return array.sort((a, b) => a.length - b.length);
}

//Sum of all the multiples of 3 or 5
function findSum(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			total += i;
		}
	}
	return total;
}
