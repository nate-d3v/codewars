//Flatten and sort an array
'use strict';

function flattenAndSort(array) {
	let newArr = [];
	array.forEach(x => x.forEach(y => newArr.push(y)));
	return newArr.sort((a, b) => a - b);
}

//Row Weights
function rowWeights(array) {
	let r1 = 0;
	let r2 = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			r1 += array[i];
		} else {
			r2 += array[i];
		}
	}
	return [r1, r2];
}
