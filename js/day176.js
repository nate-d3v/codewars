//Roman Numerals Encoder
function solution(number) {
	let digits = number.toString().length;
	let result = '';
	let mult = 0;
	for (let i = digits; i > 0; i--) {
		switch (i) {
			case 4:
				mult = Math.trunc(number / 1000);
				result += 'M'.repeat(mult);
				number = number - mult * 1000;
				break;
			case 3:
				mult = Math.trunc(number / 100);
				if (mult > 8) {
					result += 'CM';
				} else if (mult > 4) {
					result += 'D' + 'C'.repeat(mult - 5);
				} else if (mult > 3) {
					result += 'CD';
				} else if (mult > 0) {
					result += 'C'.repeat(mult);
				}
				number = number - mult * 100;
				break;
			case 2:
				mult = Math.trunc(number / 10);
				if (mult > 8) {
					result += 'XC';
				} else if (mult > 4) {
					result += 'L' + 'X'.repeat(mult - 5);
				} else if (mult > 3) {
					result += 'XL';
				} else if (mult > 0) {
					result += 'X'.repeat(mult);
				}
				number = number - mult * 10;
				break;
			case 1:
				mult = number;
				if (mult > 8) {
					result += 'IX';
				} else if (mult > 4) {
					result += 'V' + 'I'.repeat(mult - 5);
				} else if (mult > 3) {
					result += 'IV';
				} else if (mult > 0) {
					result += 'I'.repeat(mult);
				}
				break;
		}
	}
	return result;
}
