//Testing 1-2-3
var number = function (array) {
	return array.map((x, i) => `${i + 1}: ${x}`);
};

//Make a function that does arithmetic!
function arithmetic(a, b, operator) {
	switch (operator) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'multiply':
			return a * b;
		case 'divide':
			return a / b;
	}
}
