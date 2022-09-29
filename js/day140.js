//Counting Duplicates
function duplicateCount(text) {
	let unique = [...new Set(text.toLowerCase())];
	return unique.filter(
		x => text.split('').filter(y => y.toLowerCase() === x).length > 1
	).length;
}
