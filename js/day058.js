//N-th Power
function index(array, n) {
	return array.length - 1 < n ? -1 : Math.pow(array[n], n);
}

//Vowel Count
function getCount(str) {
	let vowelsCount = 0;
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	for (let letter of str) {
		if (vowels.includes(letter)) {
			vowelsCount += 1;
		}
	}

	return vowelsCount;
}
