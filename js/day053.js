//Grasshopper - Terminal game move function
const move = (position, roll) => position + roll * 2;

//Cat years, Dog years
var humanYearsCatYearsDogYears = function (humanYears) {
	switch (humanYears) {
		case 1:
			return [1, 15, 15];
		case 2:
			return [2, 24, 24];
		default:
			return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
	}
};
