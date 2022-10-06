//Your order, please
function order(words) {
	let arr = [];
	for (let i = 1; i <= words.split(' ').length; i++) {
		arr.push(words.split(' ').find(x => x.includes(i.toString())));
	}
	return arr.join(' ');
}
