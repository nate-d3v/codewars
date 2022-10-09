//Does my number look big in this?
function narcissistic(value) {
	let x = value.toString().length;
	return (
		value
			.toString()
			.split('')
			.reduce((t, n) => t + Math.pow(+n, x), 0) === value
	);
}
