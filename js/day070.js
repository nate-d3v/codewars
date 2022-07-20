//Binary Addition
function addBinary(a, b) {
	let remainder = a + b;
	let arr = [];
	while (remainder > 2) {
		arr.unshift(Math.floor(remainder % 2));
		remainder /= 2;
	}
	arr.unshift(1);
	return arr.join('');
}

//Sum of odd numbers
function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}
