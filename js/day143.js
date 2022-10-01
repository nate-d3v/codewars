//Replace With Alphabet Position
function alphabetPosition(text) {
	let str = 'abcdefghijklmnopqrstuvwxyz';
	return text
		.split('')
		.filter(x => str.indexOf(x.toLowerCase()) !== -1)
		.map(x => str.indexOf(x.toLowerCase()) + 1)
		.join(' ');
}
