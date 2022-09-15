//Alphabet symmetry
function solve(arr) {
	let array = 'abcdefghijklmnopqrstuvwxyz';
	let result = [];
	for (const word of arr) {
		let counter = 0;
		for (let i = 0; i < word.length; i++) {
			if (array.indexOf(word[i].toLowerCase()) === i) {
				counter += 1;
			}
		}
		result.push(counter);
	}
	return result;
}

//Refactored Greeting
class Person {
	constructor(name) {
		this.name = name;
	}
	greet(yourName) {
		return 'Hello ' + yourName + ', my name is ' + this.name;
	}
}
