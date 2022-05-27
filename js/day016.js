//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
	if (input === null || input.length === 0) {
		return [];
	} else if (input.filter(x => typeof x === 'number')) {
		let a = 0;
		input.filter(x => x > 0).forEach(x => a++);
		let b = input.filter(x => x < 0).reduce((total, n) => total + n, 0);
		return [a, b];
	}
}

//MakeUpperCase
function makeUpperCase(str) {
	return str.toUpperCase();
}
