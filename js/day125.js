//Alphabetical Addition
function addLetters(...letters) {
	let arr = [
		'z',
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
	];
	let result = [...letters].map(x => arr.indexOf(x)).reduce((t, n) => t + n, 0);
	return arr[result % 26];
}

//Ordered Count of Characters
const orderedCount = function (text) {
	let unique = [...new Set(text.split(''))];
	return unique.map(x => [x, text.split('').filter(y => y === x).length]);
};
