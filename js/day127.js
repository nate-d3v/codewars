//Drying Potatoes
function potatoes(p0, w0, p1) {
	let percentage = +(p1 / 100).toFixed(2);
	let weight = +(w0 * ((100 - p0) / 100)).toFixed(2);
	console.log(percentage, weight);
	return Math.floor(
		(weight * percentage) / +(1 - percentage).toFixed(2) + weight
	);
}

//Averages of numbers
function averages(numbers) {
	let arr = [];
	if (numbers !== null) {
		for (let i = 0; i < numbers.length - 1; i++) {
			arr.push((numbers[i] + numbers[i + 1]) / 2);
		}
	}
	return arr;
}
