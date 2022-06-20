//Double Char
function doubleChar(str) {
	return str
		.split('')
		.map(x => x + x)
		.join('');
}

//Grasshopper - Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
