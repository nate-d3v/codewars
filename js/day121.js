//16+18=214
function add(num1, num2) {
	let arr = [];
	let n1 = num1.toString().split('');
	let n2 = num2.toString().split('');

	if (n1.length > n2.length) {
		for (let i = 0; i <= n1.length - n2.length; i++) {
			n2.unshift('0');
		}
	} else if (n2.length > n1.length) {
		for (let i = 0; i <= n2.length - n1.length; i++) {
			n1.unshift('0');
		}
	}

	for (let i = n1.length - 1; i >= 0; i--) {
		arr.unshift(+n1[i] + +n2[i]);
	}

	return +arr.join('');
}

//Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers) {
	let unique = [...new Set(numbers)];
	return unique
		.sort((a, b) => b - a)
		.slice(0, 3)
		.reduce((t, n) => t + n, 0);
}
