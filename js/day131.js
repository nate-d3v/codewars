//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
	for (const obj of list) {
		obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`;
	}
	return list;
}

//Char Code Calculation
function calc(x) {
	let total1 = x
		.split('')
		.map(x => x.charCodeAt())
		.join('');
	let total2 = [...total1].filter(x => x === '7').length;
	return total2 * 6;
}
