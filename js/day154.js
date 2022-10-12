//Find the unique number
function findUniq(arr) {
	let unique = [...new Set(arr)];
	return arr.indexOf(unique[0]) === arr.lastIndexOf(unique[0])
		? unique[0]
		: unique[1];
}
