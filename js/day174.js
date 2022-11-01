//Mexican Wave
function wave(str) {
	let result = [];
	let words = str.split('');

	for (let i = 0; i < words.length; i++) {
		if (words[i] === ' ') {
			continue;
		} else {
			result.push(
				words.slice(0, i).join('') +
					words[i].toUpperCase() +
					words.slice(i + 1).join('')
			);
		}
	}

	return result;
}
