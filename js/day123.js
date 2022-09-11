//Build a square
function generateShape(integer) {
	let arr = [];
	for (let i = 0; i < integer; i++) {
		arr.push('+'.repeat(integer));
	}
	return arr.join('\n');
}

//Get key/value pairs as arrays
function keysAndValues(data) {
	return [Object.keys(data), Object.values(data)];
}
