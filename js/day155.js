//Equal Sides Of An Array
function findEvenIndex(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (
			arr.slice(0, i).reduce((t, n) => t + n, 0) ===
			arr.slice(i + 1).reduce((t, n) => t + n, 0)
		) {
			result.push(i);
		}
	}
	return result.length === 0 ? -1 : result.sort()[0];
}
