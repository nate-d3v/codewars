//SantaClausable Interface
function isSantaClausable(obj) {
	if (
		typeof obj.sayHoHoHo === 'function' &&
		typeof obj.distributeGifts === 'function' &&
		typeof obj.goDownTheChimney === 'function'
	) {
		return true;
	} else {
		return false;
	}
}

//Reverse a Number
function reverseNumber(n) {
	return n < 0
		? Number(n.toString().split('').slice(1).reverse().join('')) * -1
		: Number(n.toString().split('').reverse().join(''));
}
