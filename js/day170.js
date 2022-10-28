//Valid Braces
function validBraces(braces) {
	let obj = {
		'[': ']',
		'(': ')',
		'{': '}',
	};
	let arr = braces.split('');
	let str = [];

	for (let el of arr) {
		if (obj.hasOwnProperty(el)) {
			str.unshift(obj[el]);
		} else if (el === str[0]) {
			str.shift();
		} else {
			return false;
		}
	}
	return str.length === 0;
}
