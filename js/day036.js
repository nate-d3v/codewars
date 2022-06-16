//Sum without highest and lowest number
function sumArray(array) {
	return Array.isArray(array)
		? array
				.sort((a, b) => a - b)
				.slice(1, array.length - 1)
				.reduce((t, n) => t + n, 0)
		: 0;
}

//Find the first non-consecutive number
function firstNonConsecutive(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			return null;
		} else if (arr[i + 1] - arr[i] !== 1) {
			return arr[i + 1];
		}
	}
}
