//Growth of a Population
function nbYear(p0, percent, aug, p) {
	let counter = 0;
	console.log(p0, percent, aug, p);
	while (p0 < p) {
		p0 = Math.trunc(p0 + p0 * (percent / 100) + aug);
		counter += 1;
	}
	return counter;
}

//Friend or Foe?
function friend(friends) {
	return friends.filter(x => x.length === 4);
}
