//Stop gninnipS My sdroW!
function spinWords(string) {
	return string
		.split(' ')
		.map(x => (x.length > 4 ? x.split('').reverse().join('') : x))
		.join(' ');
}
