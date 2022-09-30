//Duplicate Encoder
function duplicateEncode(word) {
	let arr = word.split('');
	return arr
		.map(x =>
			arr.filter(y => y.toLowerCase() === x.toLowerCase()).length > 1
				? ')'
				: '('
		)
		.join('');
}
