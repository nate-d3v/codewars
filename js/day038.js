//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
	let obj = {
		green: 'yellow',
		yellow: 'red',
		red: 'green',
	};
	return obj[current];
}

//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
	return Math.floor((s * 1000) / 36);
}
