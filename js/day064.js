//Isograms
function isIsogram(str) {
	return new Set(str.toLowerCase()).size === str.length;
}

//Shortest Word
function findShort(s) {
	return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
}
