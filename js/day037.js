//Get Planet Name By ID
function getPlanetName(id) {
	var name;
	switch (id) {
		case 1:
			name = 'Mercury';
			break;
		case 2:
			name = 'Venus';
			break;
		case 3:
			name = 'Earth';
			break;
		case 4:
			name = 'Mars';
			break;
		case 5:
			name = 'Jupiter';
			break;
		case 6:
			name = 'Saturn';
			break;
		case 7:
			name = 'Uranus';
			break;
		case 8:
			name = 'Neptune';
			break;
	}

	return name;
}

//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
	let score = (s1 + s2 + s3) / 3;
	switch (true) {
		case score >= 90:
			return 'A';
		case score >= 80:
			return 'B';
		case score >= 70:
			return 'C';
		case score >= 60:
			return 'D';
		default:
			return 'F';
	}
}
