//Maximum Product
function adjacentElementsProduct(array) {
	let newArr = [];
	for (let i = 0; i < array.length - 1; i++) {
		newArr.push(array[i] * array[i + 1]);
	}
	return Math.max(...newArr);
}

//Alphabet war
function alphabetWar(fight) {
	let left = { w: 4, p: 3, b: 2, s: 1 };
	let right = { m: 4, q: 3, d: 2, z: 1 };
	let leftPoints = 0;
	let rightPoints = 0;

	for (let letter of fight) {
		if (letter in left) {
			leftPoints += left[letter];
		} else if (letter in right) {
			rightPoints += right[letter];
		}
	}
	return leftPoints > rightPoints
		? 'Left side wins!'
		: rightPoints > leftPoints
		? 'Right side wins!'
		: "Let's fight again!";
}
