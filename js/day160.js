//Sort the odd
function sortArray(array) {
	let even = {};
	let odd = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			even[i] = array[i];
		}
	}
	for (let i = 0, j = 0; i < array.length; i++) {
		if (Object.keys(even).includes(i.toString())) {
			result.push(even[i]);
		} else {
			result.push(odd[j]);
			j++;
		}
	}
	return result;
}
