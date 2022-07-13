//List Filtering
function filter_list(l) {
	return l.filter(x => Number.isInteger(x));
}

//Jaden Casing Strings
String.prototype.toJadenCase = function () {
	return this.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
};
