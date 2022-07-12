//You're a square!
var isSquare = function (n) {
	return Number.isInteger(Math.sqrt(n));
};

//Descending Order
function descendingOrder(n) {
	return Number(
		n
			.toString()
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}
