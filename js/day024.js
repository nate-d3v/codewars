//Simple multiplication
function simpleMultiplication(number) {
	return number % 2 === 0 ? number * 8 : number * 9;
}

//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
	return (
		yourPoints >
		classPoints.reduce((a, b) => a + b, yourPoints) / (classPoints.length + 1)
	);
}
