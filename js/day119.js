//Add property to every object in array
function addProperty(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].usersAnswer = null;
	}
}

addProperty(questions);

//Number Of Occurrences
Array.prototype.numberOfOccurrences = function (n) {
	return this.filter(x => x === n).length;
};
