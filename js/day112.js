//Currying functions: multiply all elements in an array
const multiplyAll = arr => n => arr.map(x => x * n);

//Over The Road
function overTheRoad(address, n) {
	let position = 0;
	let result = 0;
	if (address % 2 !== 0) {
		position = (address + 1) / 2;
		result = 2 * (n - (position - 1));
	} else {
		position = n + 1 - address / 2;
		result = position * 2 - 1;
	}
	return result;
}
