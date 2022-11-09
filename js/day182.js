//Title Case
function titleCase(title, minorWords) {
	return !title
		? title
		: title
				.split(' ')
				.map((x, i) =>
					i === 0
						? x[0].toUpperCase() + x.slice(1).toLowerCase()
						: minorWords &&
						  minorWords.toLowerCase().split(' ').includes(x.toLowerCase())
						? x.toLowerCase()
						: x[0].toUpperCase() + x.slice(1).toLowerCase()
				)
				.join(' ');
}
