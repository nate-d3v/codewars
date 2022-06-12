//Reversed Words
function reverseWords(str) {
	return str.split(' ').reverse().join(' ');
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
	return bonus ? `£${salary * 10}` : `£${salary}`;
}
