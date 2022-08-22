//Sorted? yes? no? how?
function isSortedAndHow(array) {
	let newArr = array.join('');
	if (newArr === array.sort((a, b) => a - b).join('')) {
		return 'yes, ascending';
	} else if (newArr === array.sort((a, b) => b - a).join('')) {
		return 'yes, descending';
	} else {
		return 'no';
	}
}

//Leap Years
function isLeapYear(year) {
	if (year % 400 === 0) {
		return true;
	} else if (year % 100 === 0) {
		return false;
	} else if (year % 4 === 0) {
		return true;
	} else {
		return false;
	}
}
