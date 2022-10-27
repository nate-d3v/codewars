//Consecutive strings
function longestConsec(strarr, k) {
	let newArr = [];
	for (let i = 0; i < strarr.length - (k - 1); i++) {
		let str = '';
		let counter = 0;
		while (counter < k) {
			str += strarr[i + counter];
			counter++;
		}
		newArr.push(str);
	}
	let longest = newArr.reduce((t, n) => (n.length > t ? n.length : t), 0);
	if (strarr.length === 0 || k > strarr.length || k <= 0) {
		return '';
	} else {
		return newArr.filter(x => x.length === longest)[0];
	}
}
