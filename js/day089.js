//Are the numbers in order?
function inAscOrder(arr) {
	return JSON.stringify(arr) === JSON.stringify(arr.sort((a, b) => a - b));
}

//Small enough? - Beginner
function smallEnough(a, limit) {
	return a.every(x => x <= limit);
}
