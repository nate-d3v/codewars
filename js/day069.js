//Regex validate PIN code
function validatePIN(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

//Find the next perfect square!
function findNextSquare(sq) {
	return sq / Math.sqrt(sq) === Math.trunc(Math.sqrt(sq))
		? Math.pow(Math.sqrt(sq) + 1, 2)
		: -1;
}
