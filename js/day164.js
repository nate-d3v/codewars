//Count the smiley faces!
//return the total number of smiling faces in the array
function countSmileys(arr) {
	return arr.filter(x => {
		if (x.includes(')') || x.includes('D')) {
			if (x[0] === ':' || x[0] === ';') {
				if (x.length < 3) {
					return true;
				} else if (x.length === 3) {
					return x[1] === '-' || x[1] === '~' ? true : false;
				} else {
					return false;
				}
			}
		}
	}).length;
}
