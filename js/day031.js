//Is n divisible by x and y?
function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0;
}

//Get the mean of an array
function getAverage(marks) {
	return Math.floor(marks.reduce((t, n) => t + n, 0) / marks.length);
}
