//Find the odd int
function findOdd(A) {
	let unique = [...new Set(A)];
	for (const n of A) {
		if (A.filter(x => x === n).length % 2 !== 0) {
			return n;
		}
	}
}
