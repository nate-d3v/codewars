//Even numbers in an array
function evenNumbers(array, number) {
	return array.filter(x => x % 2 === 0).slice(-number);
}

//Moves in squared strings (I)
function vertMirror(strng) {
	return strng
		.split('\n')
		.map(x => x.split('').reverse().join(''))
		.join('\n');
}
function horMirror(strng) {
	return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
	return fct(s);
}
