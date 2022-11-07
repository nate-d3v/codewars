//Roman Numerals Decoder
function solution(roman) {
	let obj = {
		M: 1000,
		CM: 900,
		CD: 400,
		D: 500,
		C: 100,
		XC: 90,
		XL: 40,
		L: 50,
		X: 10,
		IX: 9,
		IV: 4,
		V: 5,
		I: 1,
	};
	let result = 0;
	for (const el in obj) {
		while (roman.indexOf(el) === 0) {
			result += obj[el];
			roman = roman.slice(el.length);
		}
	}
	return result;
}
