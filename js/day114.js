//Love vs friendship
function wordsToMarks(string) {
	let arr = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	return string
		.split('')
		.map(x => arr.indexOf(x) + 1)
		.reduce((t, n) => t + n, 0);
}

//My Language Skills
function myLanguages(results) {
	let arr = [];
	for (const item in results) {
		if (results[item] >= 60) {
			arr.push([results[item], item]);
		}
	}
	return arr.sort((a, b) => b[0] - a[0]).map(x => x[1]);
}
