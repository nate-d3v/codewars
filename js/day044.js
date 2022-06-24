//Switch it Up!
function switchItUp(number) {
	switch (number) {
		case 0:
			return 'Zero';
		case 1:
			return 'One';
		case 2:
			return 'Two';
		case 3:
			return 'Three';
		case 4:
			return 'Four';
		case 5:
			return 'Five';
		case 6:
			return 'Six';
		case 7:
			return 'Seven';
		case 8:
			return 'Eight';
		case 9:
			return 'Nine';
	}
}

//Expressions Matter
function expressionMatter(a, b, c) {
	let expression1 = a * (b + c);
	let expression2 = a * b * c;
	let expression3 = a + b + c;
	let expression4 = (a + b) * c;

	return Math.max(expression1, expression2, expression3, expression4);
}
