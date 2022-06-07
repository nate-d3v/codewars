//Transportation on vacation
function rentalCarCost(d) {
	if (d >= 7) {
		return 40 * d - 50;
	} else if (d >= 3) {
		return 40 * d - 20;
	} else {
		return 40 * d;
	}
}

//Convert a string to an array
function stringToArray(string) {
	return string.split(' ');
}
