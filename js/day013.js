//A Needle in the Haystack
function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === 'needle') {
			return `found the needle at position ${i}`;
		}
	}
}

//Convert a Boolean to a String
function booleanToString(b) {
	if (b === true) {
		return 'true';
	} else if (b === false) {
		return 'false';
	}
}
