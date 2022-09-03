//Digitize
function digitize(n) {
	return n
		.toString()
		.split('')
		.map(x => +x);
}

//Parts of a list
function partlist(arr) {
	let newArr = [];
	for (let i = 1; i < arr.length; i++) {
		newArr.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
	}
	return newArr;
}
