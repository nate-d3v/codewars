//Persistent Bugger.
function persistence(num) {
	let counter = 0;
	while (num > 9) {
		num = num
			.toString()
			.split('')
			.reduce((t, n) => t * +n, 1);
		counter++;
	}
	return counter;
}
