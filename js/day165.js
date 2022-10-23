//Bouncing Balls
function bouncingBall(h, bounce, window) {
	let dist = h * bounce;
	let counter = 1;
	if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
		while (dist > window) {
			counter += 2;
			dist *= bounce;
		}
	} else {
		return -1;
	}
	return counter;
}
