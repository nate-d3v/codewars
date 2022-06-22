//Grasshopper - Messi Goals
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//The Feast of Many Beasts
function feast(beast, dish) {
	return (
		beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
	);
}
