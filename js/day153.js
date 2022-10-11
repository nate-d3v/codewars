//Split Strings
function solution(str) {
	let arr = [];
	for (let i = 0; i < str.length; i += 2) {
		arr.push(str.slice(0 + i, 2 + i));
	}
	if (str.length % 2 !== 0) {
		arr[arr.length - 1] += '_';
	}
	return arr;
}
