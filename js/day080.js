//Don't give me five!
function dontGiveMeFive(start, end) {
	let counter = 0;
	for (let i = start; i <= end; i++) {
		if (!i.toString().includes('5')) {
			counter += 1;
		}
	}
	return counter;
}

//Count the Digit
function nbDig(n, d) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		arr.push(i * i);
	}
	return arr
		.join('')
		.split('')
		.filter(x => x === d.toString()).length;
}
