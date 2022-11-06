//WeIrD StRiNg CaSe
function toWeirdCase(string) {
	return string
		.split(' ')
		.map(x =>
			x
				.split('')
				.map((y, i) => (i % 2 === 0 ? y.toUpperCase() : y.toLowerCase()))
				.join('')
		)
		.join(' ');
}
