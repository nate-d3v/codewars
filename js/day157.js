//Is a number prime?
function isPrime(num) {
	if (num <= 1) {
		return false;
	} else if (num <= 3) {
		return true;
	} else {
		let max = Math.sqrt(num);
		for (let i = 2; i <= max; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
}
