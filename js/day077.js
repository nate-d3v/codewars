//Find the stray number
function stray(numbers) {
	let unique = [...new Set(numbers)];
	return numbers.filter(n => n === unique[0]).length >
		numbers.filter(n => n === unique[1]).length
		? unique[1]
		: unique[0];
}

//Count the divisors of a number
function getDivisorsCnt(n) {
	let counter = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			counter++;
		}
	}
	return counter;
}
