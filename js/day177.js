//The Supermarket Queue
function queueTime(customers, n) {
	let result = [];
	for (let i = 1; i <= n; i++) {
		result.push(0);
	}
	while (customers.length > 0) {
		result[0] += customers[0];
		customers.shift(customers[0]);
		result.sort((a, b) => a - b);
	}
	return result.sort((a, b) => b - a)[0];
}
