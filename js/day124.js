//Find the nth Digit of a Number
var findDigit = function (num, nth) {
	let arr = Math.abs(num).toString().split('').reverse();
	if (nth > arr.length) {
		return 0;
	} else if (nth <= 0) {
		return -1;
	} else {
		return +arr[nth - 1];
	}
};

//Unpacking Arguments
function spread(func, args) {
	return func(...args);
}
