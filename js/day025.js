//Beginner - Reduce but Grow
function grow(x) {
	return x.reduce((a, b) => a * b, 1);
}

//Count the Monkeys!
function monkeyCount(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}
	return arr;
}
