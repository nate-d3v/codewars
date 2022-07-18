//Is this a triangle?
function isTriangle(a, b, c) {
	return a + b > c && a + c > b && c + b > a;
}

//Two to One
function longest(s1, s2) {
	return [...new Set(s1.split('').concat(s2.split('')).sort())].join('');
}
