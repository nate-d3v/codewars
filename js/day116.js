//Unlucky Days
function unluckyDays(year) {
	let result = 0;
	for (let i = 0; i < 12; i++) {
		let date = new Date(year, i, 13);
		if (date.getUTCDay() === 5) {
			result += 1;
		}
	}
	return result;
}

//Basic Sequence Practice
function sumOfN(n) {
	let result = 0;
	let arr = [];
	if (n > 0) {
		for (let i = 0; i <= n; i++) {
			result += i;
			arr.push(result);
		}
	} else {
		for (let i = 0; i >= n; i--) {
			result += i;
			arr.push(result);
		}
	}
	return arr;
}
