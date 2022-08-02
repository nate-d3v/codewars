//Summing a number's digits
function sumDigits(number) {
	return Math.abs(number)
		.toString()
		.split('')
		.reduce((t, n) => t + +n, 0);
}

//Two Oldest Ages
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
	return ages.sort((a, b) => a - b).slice(-2);
}
