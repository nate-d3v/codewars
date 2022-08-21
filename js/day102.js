//Factorial
function factorial(n) {
	let total = 1;
	for (let i = n; i > 0; i--) {
		total *= i;
	}
	return total;
}

//Find the vowels
function vowelIndices(word) {
	let arr = [];
	word.split('').forEach((x, i) => {
		if ('aeiouy'.includes(x.toLowerCase())) {
			arr.push(i + 1);
		}
	});
	return arr;
}
