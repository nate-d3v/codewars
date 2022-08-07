//The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (
		enteredCode === correctCode &&
		new Date(currentDate) <= new Date(expirationDate)
	);
}

//Deodorant Evaporator
function evaporator(content, evap_per_day, threshold) {
	let currentContent = content;
	let days = 0;
	while (currentContent > content * (threshold / 100)) {
		currentContent -= currentContent * (evap_per_day / 100);
		days++;
	}
	return days;
}
