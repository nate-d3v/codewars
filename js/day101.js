//Greet Me
var greet = function (name) {
	return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};

//Functional Addition
function add(n) {
	return function add(m) {
		return n + m;
	};
}
