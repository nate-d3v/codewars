//Find the divisors
function divisors(integer) {
	let arr = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			arr.push(i);
		}
	}
	return arr.length === 0 ? `${integer} is prime` : arr;
}

//Reverse words
function reverseWords(str) {
	return str
		.split(' ')
		.map(x => x.split('').reverse().join(''))
		.join(' ');
}
