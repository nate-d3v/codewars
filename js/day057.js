//Regular Ball Super Ball
var Ball = function (ballType = 'regular') {
	this.ballType = ballType;
};

//Well of Ideas - Easy Version
function well(x) {
	let total = x.filter(x => x === 'good').length;
	return total > 2 ? 'I smell a series!' : total > 0 ? 'Publish!' : 'Fail!';
}
