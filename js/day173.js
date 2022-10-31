//Two Sum
function twoSum(numbers, target) {
	let sum = 0;
	let result = [];
	for (let i = 0; i < numbers.length; i++) {
		sum = numbers[i];
		for (let j = 0; j < numbers.length; j++) {
			if (j === i) {
				continue;
			} else if (sum + numbers[j] === target) {
				result = [i, j];
			}
		}
	}
	return result;
}
