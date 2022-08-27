//Most digits
function findLongest(array) {
	return array.reduce((t, n) =>
		n.toString().length > t.toString().length ? n : t
	);
}

//Boiled Eggs
function cookingTime(eggs) {
	return Math.ceil(eggs / 8) * 5;
}
