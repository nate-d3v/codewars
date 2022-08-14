//Thinkful - String Drills: Repeater
function repeater(string, n) {
	let newString = '';
	for (let i = 0; i < n; i++) {
		newString += string;
	}
	return newString;
}

//Form The Minimum
function minValue(values) {
	let unique = [...new Set(values)];
	return Number(unique.sort().join(''));
}
