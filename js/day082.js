//Sum of a sequence
const sequenceSum = (begin, end, step) => {
	let total = 0;
	for (let i = begin; i <= end; i += step) {
		total += i;
	}
	return total;
};

//Largest 5 digit number in a series
function solution(digits) {
	let arr = [];
	for (let i = 0; i <= digits.length - 5; i++) {
		arr.push(Number(digits.slice(i, i + 5)));
	}
	arr.sort((a, b) => b - a);
	return arr[0];
}
