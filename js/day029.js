//Area or Perimeter
const areaOrPerimeter = function (l, w) {
	return l === w ? l * w : (l + w) * 2;
};

//Count by X
function countBy(x, n) {
	let z = [];
	for (let i = 1; i <= n; i++) {
		z.push(i * x);
	}
	return z;
}
