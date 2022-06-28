//My head is at the wrong end!
function fixTheMeerkat(arr) {
	return arr.reverse();
}

//Student's Final Grade
function finalGrade(exam, projects) {
	switch (true) {
		case exam > 90 || projects > 10:
			return 100;
		case exam > 75 && projects > 4:
			return 90;
		case exam > 50 && projects > 1:
			return 75;
		default:
			return 0;
	}
}
