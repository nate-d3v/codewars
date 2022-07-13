//Mumbling
function accum(s) {
	return s
		.split('')
		.map((x, n) => x.toUpperCase() + x.toLowerCase().repeat(n))
		.join('-');
}

//Exes and Ohs
function XO(str) {
	return (
		str.split('').filter(x => x.toLowerCase() === 'o').length ===
		str.split('').filter(x => x.toLowerCase() === 'x').length
	);
}
