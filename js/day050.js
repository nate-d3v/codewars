//Is it even?
function testEven(n) {
	return n % 2 === 0;
}

//Is the string uppercase?
String.prototype.isUpperCase = function () {
	let i = 0;
	while (i < this.length) {
		if (this[i].toUpperCase() === this[i]) {
			i++;
		} else {
			return false;
		}
	}
	return true;
};
