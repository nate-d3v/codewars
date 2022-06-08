//Total amount of points
function points(games) {
	let total = 0;
	games.forEach(x => {
		if (x.slice(0, 1) > x.slice(2, 3)) {
			total += 3;
		} else if (x.slice(0, 1) === x.slice(2, 3)) {
			total += 1;
		}
	});
	return total;
}

//If you can't sleep, just count sheep!!
var countSheep = function (num) {
	let string = '';
	for (let i = 1; i <= num; i++) {
		string += `${i} sheep...`;
	}
	return string;
};
