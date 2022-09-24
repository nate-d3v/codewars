//Sum of Digits / Digital Root
function digitalRoot(n) {
	if (n / 10 < 1) {
		return n;
	} else {
		n = n
			.toString()
			.split('')
			.reduce((t, n) => t + +n, 0);
		return digitalRoot(n);
	}
}
