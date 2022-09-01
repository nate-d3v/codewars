//Halving Sum
function halvingSum(n) {
	let result = 0;
	while (n > 0) {
		result += n;
		n = Math.floor(n / 2);
	}
	return result;
}

//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
function countDevelopers(list) {
	return list.filter(
		x => x.continent === 'Europe' && x.language === 'JavaScript'
	).length;
}
