//Grasshopper - Personalized Message
function greet(name, owner) {
	return name === owner ? 'Hello boss' : 'Hello guest';
}

//Can we divide it?
function isDivideBy(number, a, b) {
	return number % a === 0 && number % b === 0;
}
