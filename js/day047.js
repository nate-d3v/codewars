//Unfinished Loop - Bug Fixing #1
function createArray(number) {
	var newArray = [];

	for (var counter = 1; counter <= number; counter++) {
		newArray.push(counter);
	}

	return newArray;
}

//Keep up the hoop
function hoopCount(n) {
	return n < 10
		? 'Keep at it until you get it'
		: 'Great, now move on to tricks';
}
