//Simple Fun #176: Reverse Letter
function reverseLetter(str) {
	return str
		.split('')
		.reverse()
		.filter(x => /[a-z]/.test(x))
		.join('');
}

//Round up to the next multiple of 5
function roundToNext5(n) {
	return Math.ceil(n / 5) * 5;
}
