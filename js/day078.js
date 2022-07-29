//Sort Numbers
function solution(nums) {
	return nums === null ? [] : nums.sort((a, b) => a - b);
}

//Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
	let counter = 0;
	while (principal < desired) {
		principal += principal * interest * (1 - tax);
		counter++;
	}
	return counter;
}
