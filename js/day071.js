//Categorize New Member
function openOrSenior(data) {
	return data.map(x => (x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open'));
}

//Printer Errors
function printerError(s) {
	let errors = 'nopqrstuvwxyz';
	let counter = 0;
	for (let i = 0; i < s.length; i++) {
		if (errors.includes(s[i])) {
			counter++;
		}
	}
	return counter + '/' + s.length;
}
