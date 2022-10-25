//Highest Scoring Word
function high(x) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return x
		.split(' ')
		.sort(
			(a, b) =>
				b.split('').reduce((t, n) => t + alphabet.indexOf(n) + 1, 0) -
				a.split('').reduce((t, n) => t + alphabet.indexOf(n) + 1, 0)
		)[0];
}
