//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
	let total = 0;
	if (a > b) {
		for (let i = b; i <= a; i++) {
			total += i;
		}
	} else if (a < b) {
		for (let i = a; i <= b; i++) {
			total += i;
		}
	} else {
		total = a;
	}
	return total;
}

//Credit Card Mask
function maskify(cc) {
	return cc.length < 5
		? cc
		: cc
				.split('')
				.slice(0, cc.length - 4)
				.map(x => '#')
				.join('') + cc.split('').slice(-4).join('');
}
