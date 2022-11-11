//Tortoise racing
function race(v1, v2, g) {
	let hours = g / (v2 - v1);
	let minutes = hours * 60 - Math.trunc(hours) * 60;
	let seconds = minutes * 60 - Math.trunc(minutes) * 60;
	return v1 >= v2
		? null
		: [Math.trunc(hours), Math.trunc(minutes), Math.trunc(seconds)];
}
