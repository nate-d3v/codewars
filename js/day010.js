//Convert a String to a Number!
var stringToNumber = function (str) {
	return Number(str);
};

//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
	switch (operation) {
		case '+':
			return value1 + value2;
			break;
		case '-':
			return value1 - value2;
			break;
		case '*':
			return value1 * value2;
			break;
		case '/':
			return value1 / value2;
			break;
	}
}
