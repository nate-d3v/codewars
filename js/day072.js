//String ends with?
function solution(str, ending) {
	return ending.length > 0
		? str === str.split('').slice(0, -ending.length).join('') + ending
		: true;
}

//Ones and Zeros
const binaryArrayToNumber = arr => {
	return arr
		.reverse()
		.map((x, i) => {
			if (x === 0) {
				return 0;
			} else {
				return Math.pow(2, i);
			}
		})
		.reduce((t, n) => t + n, 0);
};
