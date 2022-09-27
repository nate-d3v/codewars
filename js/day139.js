//Bit Counting
var countBits = function (n) {
	return n
		.toString(2)
		.split('')
		.reduce((t, x) => (+x === 1 ? t + 1 : t), 0);
};
