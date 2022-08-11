//Find the middle element
function gimme(triplet) {
	return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

//Fizz Buzz
// Return an array
function fizzbuzz(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			arr.push('FizzBuzz');
		} else if (i % 3 === 0) {
			arr.push('Fizz');
		} else if (i % 5 === 0) {
			arr.push('Buzz');
		} else {
			arr.push(i);
		}
	}
	return arr;
}
