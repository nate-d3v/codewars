//Build Tower
function towerBuilder(nFloors) {
	let lastFloor = 2 * nFloors - 1;
	let result = [];
	for (let i = 0, j = lastFloor; i < nFloors; i++, j -= 2) {
		result.unshift(' '.repeat(i) + '*'.repeat(j) + ' '.repeat(i));
	}
	return result;
}
