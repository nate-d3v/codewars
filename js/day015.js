//Invert values
function invert(array) {
	return array.map(x => -x);
}

//Beginner Series #2 Clock
function past(h, m, s) {
	return h * 3600000 + m * 60000 + s * 1000;
}
