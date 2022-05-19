//Counting sheep...
function countSheeps(arrayOfSheep) {
	let total = 0;
	arrayOfSheep.forEach(x => {
		if (x === true) {
			total++;
		}
	});
	return total;
}

//Function 1 - hello world
function greet() {
	return 'hello world!';
}
