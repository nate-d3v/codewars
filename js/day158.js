//Are they the "same"?
function comp(array1, array2) {
	return array1 === null || array2 === null
		? false
		: array1.every(
				a =>
					array2.map(b => Math.sqrt(b)).filter(c => c === a).length ===
					array1.filter(d => d === a).length
		  );
}
