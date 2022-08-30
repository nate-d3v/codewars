//Largest pair sum in array
function largestPairSum(numbers) {
	numbers.sort((a, b) => b - a);
	return numbers[0] + numbers[1];
}

//A Rule of Divisibility by 7
function seven(m) {
	let counter = 0;
	while (m.toString().length > 2) {
		let last = Number(m.toString().slice(-1));
		let init = Number(m.toString().slice(0, -1));
		m = init - 2 * last;
		counter += 1;
	}
	return [m, counter];
}
