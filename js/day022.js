//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
	return name[0].toLowerCase() === 'r'
		? `${name} plays banjo`
		: `${name} does not play banjo`;
}

//Find Maximum and Minimum Values of a List
var min = function (list) {
	list.sort((a, b) => a - b);
	return list[0];
};

var max = function (list) {
	list.sort((a, b) => b - a);
	return list[0];
};
