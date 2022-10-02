//Take a Ten Minutes Walk
function isValidWalk(walk) {
	let n = walk.filter(x => x === 'n').length;
	let s = walk.filter(x => x === 's').length;
	let w = walk.filter(x => x === 'w').length;
	let e = walk.filter(x => x === 'e').length;
	return walk.length === 10 && n === s && w === e;
}
