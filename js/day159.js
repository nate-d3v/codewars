//Find the missing letter
function findMissingLetter(array) {
	let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let max = alph.indexOf(array[0].toLowerCase());
	for (let i = max, j = 0; i < max + array.length; i++, j++) {
		if (alph[i] !== array[j].toLowerCase()) {
			return array[0] === array[0].toUpperCase()
				? alph[i].toUpperCase()
				: alph[i];
		}
	}
}
