//Fun with ES6 Classes #2 - Animals and Inheritance
// Get Coding :)

class Shark extends Animal {
	constructor(name, age, status) {
		super(name, age, 0, 'shark', status);
	}
}

class Cat extends Animal {
	constructor(name, age, status) {
		super(name, age, 4, 'cat', status);
	}
	introduce() {
		return super.introduce() + '  Meow meow!';
	}
}

class Dog extends Animal {
	constructor(name, age, status, master) {
		super(name, age, 4, 'dog', status);
		this.master = master;
	}
	greetMaster() {
		return `Hello ${this.master}`;
	}
}

//Return the Missing Element
function getMissingElement(superImportantArray) {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
		x => !superImportantArray.includes(x)
	)[0];
}
