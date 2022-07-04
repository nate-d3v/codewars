//I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
	switch (nbPetals % 6) {
		case 1:
			return 'I love you';
		case 2:
			return 'a little';
		case 3:
			return 'a lot';
		case 4:
			return 'passionately';
		case 5:
			return 'madly';
		case 0:
			return 'not at all';
	}
}

//Stringy Strings
function stringy(size) {
	let string = '1';
	for (let i = 0; i < size - 1; i++) {
		if (i % 2 === 0) {
			string += '0';
		} else {
			string += '1';
		}
	}
	return string;
}
