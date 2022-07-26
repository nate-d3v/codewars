//Sum of the first nth term of Series
function SeriesSum(n) {
	let total = 0;
	for (let i = 0; i < n; i++) {
		total += 1 / (3 * i + 1);
	}
	return total.toFixed(2);
}

//The highest profit wins!
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}
