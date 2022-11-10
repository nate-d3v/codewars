//Give me a Diamond
function diamond(n) {
	let result = '';
	if (n <= 0 || n % 2 === 0) {
		return null;
	} else {
		for (let i = 1, j = Math.floor(n / 2); i <= n; i += 2, j--) {
			result += ' '.repeat(j) + '*'.repeat(i) + '\n';
		}
		for (let i = n - 2, j = 1; i >= 1; i -= 2, j++) {
			result += ' '.repeat(j) + '*'.repeat(i) + '\n';
		}
	}
	return result;
}
