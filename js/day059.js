//Disemvowel Trolls
function disemvowel(str) {
	return str
		.split('')
		.filter(c => 'aeiou'.includes(c.toLowerCase()) === false)
		.join('');
}

//Square Every Digit
function squareDigits(num) {
	return Number(
		num
			.toString()
			.split('')
			.map(n => +n * +n)
			.join('')
	);
}
