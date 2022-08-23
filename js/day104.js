//Palindrome chain length
var palindromeChainLength = function (n) {
	let counter = 0;
	while (true) {
		let m = Number(n.toString().split('').reverse().join(''));
		if (n === m) {
			return counter;
		} else {
			n = n + m;
			counter++;
		}
	}
};

//Sum of Triangular Numbers
function sumTriangularNumbers(n) {
	let arr = [];
	let x = 0;
	for (let i = 1; i <= n; i++) {
		x += i;
		arr.push(x);
	}
	return arr.length === 0 ? 0 : arr.reduce((t, n) => t + n);
}
