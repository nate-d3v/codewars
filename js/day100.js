//Number of Decimal Digits
function digits(n) {
	return n.toString().length;
}

//Sort the Gift Code
function sortGiftCode(code) {
	return code.split('').sort().join('');
}
