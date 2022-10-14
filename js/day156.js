//Decode the Morse code
decodeMorse = function (morseCode) {
	return morseCode
		.split('   ')
		.map(x =>
			x
				.split(' ')
				.map(y => MORSE_CODE[y])
				.join('')
		)
		.join(' ')
		.trim();
};
