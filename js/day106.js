//Speed Control
function gps(s, x) {
	return x.length <= 1
		? 0
		: Math.floor(
				x
					.map((n, i) => x[i + 1] - x[i])
					.slice(0, -1)
					.map(x => (3600 * x) / s)
					.sort((a, b) => b - a)[0]
		  );
}

//Bumps in the Road
function bump(x) {
	return x.split('').filter(x => x === 'n').length <= 15
		? 'Woohoo!'
		: 'Car Dead';
}
