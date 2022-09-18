//Minimize Sum Of Array (Array Series #1)
function minSum(arr) {
	let sortArr = arr.sort((a, b) => b - a);
	let result = [];

	for (let i = 0; i < sortArr.length / 2; i++) {
		result.push(sortArr[i] * sortArr[sortArr.length - i - 1]);
	}

	return result.reduce((t, n) => t + n, 0);
}

//Odd-Even String Sort
function sortMyString(S) {
	let firstHalf = [...S].filter((x, i) => i % 2 === 0);
	let secondHalf = [...S].filter((x, i) => i % 2 !== 0);

	return `${firstHalf.join('')} ${secondHalf.join('')}`;
}
