//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump / mpg <= fuelLeft;
};

//Array plus array
function arrayPlusArray(arr1, arr2) {
	return arr1.concat(arr2).reduce((acc, n) => acc + n, 0);
}
