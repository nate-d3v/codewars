//Triangular Treasure
// Return the nth triangular number
function triangular(n) {
	return n <= 0 ? 0 : (n * (n + 1)) / 2;
}

//Maximum Length Difference
function mxdiflg(a1, a2) {
	return a1.length === 0 || a2.length === 0
		? -1
		: Math.max(
				Math.abs(
					a1.sort((a, b) => b.length - a.length)[0].length -
						a2.sort((a, b) => a.length - b.length)[0].length
				),
				Math.abs(
					a2.sort((a, b) => b.length - a.length)[0].length -
						a1.sort((a, b) => a.length - b.length)[0].length
				)
		  );
}
