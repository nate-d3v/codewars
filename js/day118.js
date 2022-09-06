//Flatten
var flatten = function (array) {
	return [].concat(...array);
};

//Digits explosion
function explode(s) {
	return s
		.split('')
		.map(x => x.repeat(+x))
		.join('');
}
