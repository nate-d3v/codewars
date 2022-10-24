//Break camelCase
// complete the function
function solution(string) {
	let arr = string.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].toUpperCase() === arr[i]) {
			arr.splice(i, 0, ' ');
			i++;
		}
	}
	return arr.join('');
}
