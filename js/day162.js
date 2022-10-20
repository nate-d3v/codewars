//Build a pile of Cubes
function findNb(m) {
	let n = 1;
	let result = 0;
	while (result < m) {
		result += Math.pow(n, 3);
		n++;
	}
	return result === m ? n - 1 : -1;
}
