//Remove anchor from URL
function removeUrlAnchor(url) {
	return url.indexOf('#') === -1
		? url
		: url.slice(0, (url.length - url.indexOf('#')) * -1);
}

//Find the capitals
var capitals = function (word) {
	let arr = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase()) {
			arr.push(i);
		}
	}
	return arr;
};
