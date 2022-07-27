//Remove the minimum
function removeSmallest(numbers) {
	let minIndex = numbers.indexOf(Math.min(...numbers));
	return [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1)];
}

//Breaking chocolate problem
function breakChocolate(n, m) {
	return m * n === 0 ? 0 : m * n - 1;
}
