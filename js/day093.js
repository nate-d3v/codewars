//Check the exam
function checkExam(array1, array2) {
	let total = 0;
	for (let i = 0; i < array1.length; i++) {
		if (array2[i] === array1[i]) {
			total += 4;
		} else if (array2[i] !== '') {
			total -= 1;
		}
	}
	return total < 0 ? 0 : total;
}

//JavaScript Array Filter
function getEvenNumbers(numbersArray) {
	return numbersArray.filter(x => x % 2 === 0);
}
