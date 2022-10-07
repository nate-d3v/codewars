//Tribonacci Sequence
function tribonacci(signature, n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		if (i < 3) {
			arr.push(signature[i]);
		} else {
			arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
		}
	}
	return arr;
}
