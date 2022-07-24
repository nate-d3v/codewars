//Number of People in the Bus
var number = function (busStops) {
	return busStops.reduce((t, n) => n[0] - n[1] + t, 0);
};

//Odd or Even?
function oddOrEven(array) {
	return array.reduce((t, n) => n + t, 0) % 2 === 0 ? 'even' : 'odd';
}
