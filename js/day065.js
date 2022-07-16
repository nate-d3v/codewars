//Complementary DNA
function DNAStrand(dna) {
	return dna
		.split('')
		.map(x => {
			switch (x) {
				case 'A':
					return 'T';
				case 'T':
					return 'A';
				case 'C':
					return 'G';
				case 'G':
					return 'C';
			}
		})
		.join('');
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
	numbers.sort((a, b) => a - b);
	return numbers[0] + numbers[1];
}
