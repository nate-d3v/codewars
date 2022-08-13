//Fix string case
function solve(s) {
	let lower = s.split('').filter(x => x.toLowerCase() === x).length;
	let upper = s.split('').filter(x => x.toUpperCase() === x).length;
	return upper > lower ? s.toUpperCase() : s.toLowerCase();
}

//Alternate capitalization
function capitalize(s) {
	let arr1 = [];
	let arr2 = [];
	s.split('').forEach((x, i) => {
		if (i === 0 || i % 2 === 0) {
			arr1.push(x.toUpperCase());
			arr2.push(x);
		} else {
			arr1.push(x);
			arr2.push(x.toUpperCase());
		}
	});
	return [arr1.join(''), arr2.join('')];
}
