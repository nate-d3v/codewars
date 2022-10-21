//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
	let unique = [...new Set(arr)];
	let del = [];

	for (const num of unique) {
		let counter = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === num) {
				counter++;
				if (counter > n) {
					del.push(i);
				}
			}
		}
	}
	return arr.filter((x, i) => !del.includes(i));
}
