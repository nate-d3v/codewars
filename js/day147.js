//Convert string to camel case
function toCamelCase(str) {
	let space = '';
	if (str.includes('_')) {
		space = '_';
	} else if (str.includes('-')) {
		space = '-';
	}
	if (str.length === 0) {
		return str;
	} else {
		return str
			.split(space)
			.map((x, i) => {
				let [first, ...rest] = x;
				if (i === 0) {
					return first + rest.join('');
				} else {
					return first.toUpperCase() + rest.join('');
				}
			})
			.join('');
	}
}
