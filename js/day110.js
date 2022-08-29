//Simple beads count
function countRedBeads(n) {
	return n < 2 ? 0 : (n - 1) * 2;
}

//Sum of Cubes
function sumCubes(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(Math.pow(i, 3));
	}
	return arr.reduce((t, n) => t + n, 0);
}
