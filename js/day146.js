//Unique In Order
var uniqueInOrder = function (iterable) {
	let arr = [];
	if (iterable.length > 0) {
		arr.push(iterable[0]);
	}
	for (let i = 1; i < iterable.length; i++) {
		if (iterable[i] !== arr[arr.length - 1]) arr.push(iterable[i]);
	}
	return arr;
};
