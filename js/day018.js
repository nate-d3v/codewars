//Beginner Series #1 School Paperwork
function paperwork(n, m) {
	return n < 0 || m < 0 ? 0 : n * m;
}

//Calculate BMI
function bmi(weight, height) {
	let bmi = weight / (height * height);
	if (bmi <= 18.5) {
		return 'Underweight';
	} else if (bmi <= 25) {
		return 'Normal';
	} else if (bmi <= 30) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
}
