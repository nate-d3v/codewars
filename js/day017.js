//Fake Binary
function fakeBin(x) {
	return x
		.split('')
		.map(x => {
			if (x < 5) {
				return '0';
			} else {
				return '1';
			}
		})
		.join('');
}

//Is he gonna survive?
function hero(bullets, dragons) {
	return bullets / 2 >= dragons ? true : false;
}
