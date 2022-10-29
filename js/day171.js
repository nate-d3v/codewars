//Write Number in Expanded Form
function expandedForm(num) {
	let len = Number('1' + '0'.repeat(num.toString().length - 1));
	let str = '';
	while (len > 1) {
		let x = Math.floor(num / len) * len;
		if (x !== 0) {
			str += `${x.toString()} + `;
			num = num % len;
			len = len / 10;
		} else {
			num = num % len;
			len = len / 10;
		}
	}
	return num === 0 ? str.slice(0, -3) : (str += num.toString());
}
