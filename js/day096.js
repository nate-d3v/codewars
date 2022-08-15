//Sum of numbers from 0 to N
var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		let arr = [];
		if (count > 0) {
			for (let i = 0; i <= count; i++) {
				arr.push(i);
			}
			return arr.join('+') + ' = ' + arr.reduce((t, n) => t + n);
		} else if (count < 0) {
			return `${count}<0`;
		} else {
			return '0=0';
		}
	};

	return SequenceSum;
})();

//Remove duplicate words
function removeDuplicateWords(s) {
	return [...new Set(s.split(' '))].join(' ');
}
