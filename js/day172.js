//Count characters in your string
function count(string) {
	let result = {};
	let unique = [...new Set(string.split(''))];

	for (const el of unique) {
		result[el] = string.split('').filter(x => x === el).length;
	}

	return result;
}
