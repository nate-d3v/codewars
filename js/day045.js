//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
	return this.split('')
		.map(x => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()))
		.join('');
};

//Count Odd Numbers below n
function oddCount(n) {
	return Math.floor(n / 2);
}
