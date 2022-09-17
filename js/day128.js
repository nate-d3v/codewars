//Filter the number
var FilterString = function (value) {
	return +[...value].filter(x => '0123456789'.includes(x)).join('');
};

//Substituting Variables Into Strings: Padded Numbers
function solution(value) {
	return `Value is ${'0'.repeat(
		5 - value.toString().length
	)}${value.toString()}`;
}
