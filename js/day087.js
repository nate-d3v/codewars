//No oddities here
function noOdds(values) {
	return values.filter(x => x % 2 === 0);
}

//Maximum Multiple
function maxMultiple(divisor, bound) {
	for (let i = bound; i > 0; i--) {
		if (i % divisor === 0) {
			return i;
		}
	}
}
