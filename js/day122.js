//Switcheroo
function switcheroo(x) {
	return x
		.split('')
		.map(x => (x === 'a' ? 'b' : x === 'b' ? 'a' : x))
		.join('');
}

//Going to the cinema
function movie(card, ticket, perc) {
	let total = card;
	let movies = 0;
	let discountedTicket = ticket;
	while (Math.ceil(total) >= movies * ticket) {
		discountedTicket *= perc;
		total += discountedTicket;
		movies += 1;
	}
	return movies;
}
