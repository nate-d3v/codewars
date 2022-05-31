//DNA to RNA Conversion
function DNAtoRNA(dna) {
	return dna
		.split('')
		.map(x => (x === 'T' ? 'U' : x))
		.join('');
}

//Opposites Attract
function lovefunc(flower1, flower2) {
	return (flower1 + flower2) % 2 !== 0;
}
