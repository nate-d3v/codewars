//Calculate average
function find_average(array) {
	return array.length > 0
		? array.reduce((total, num) => total + num, 0) / array.length
		: 0;
}

//Reversed sequence
const reverseSeq = n => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	return arr;
};
