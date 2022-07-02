//Grasshopper - Check for factor
function checkForFactor(base, factor) {
	return base % factor === 0;
}

//Correct the mistakes of the character recognition software
function correct(string) {
	return string
		.split('')
		.map(x => {
			switch (x) {
				case '5':
					return 'S';
				case '0':
					return 'O';
				case '1':
					return 'I';
				default:
					return x;
			}
		})
		.join('');
}
