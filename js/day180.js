//IP Validation
function isValidIP(str) {
	let ip = str.split('.');
	return (
		ip.length === 4 &&
		ip.every(x => /^\d+$/.test(x) && +x >= 0 && +x <= 255) &&
		ip.filter(x => x.length > 1 && x[0] === '0').length === 0
	);
}
