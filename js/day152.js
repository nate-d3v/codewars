//Playing with digits
function digPow(n, p) {
	let arr = n.toString().split('');
	let result = 0;
	for (let i = 0; i < arr.length; i++, p++) {
		result += Math.pow(arr[i], p);
	}
	return result % n === 0 ? result / n : -1;
}
