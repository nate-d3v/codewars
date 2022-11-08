//CamelCase Method
String.prototype.camelCase = function () {
	return this.split(' ')
		.map(x => x && x[0].toUpperCase() + x.slice(1))
		.join('')
		.trim();
};
