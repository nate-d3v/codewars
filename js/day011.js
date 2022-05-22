//Returning Strings
function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}

//Convert number to reversed array of digits
function digitize(n) {
	let m = String(n).split('').reverse();
	let o = m.map(x => Number(x));
	return o;
}
