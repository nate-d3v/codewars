//Two fighters, one winner.
function declareWinner(fighter1, fighter2, firstAttacker) {
	let first, second;
	if (firstAttacker === fighter1.toString()) {
		first = fighter1;
		second = fighter2;
	} else {
		first = fighter2;
		second = fighter1;
	}
	while (true) {
		second.health -= first.damagePerAttack;
		if (second.health <= 0) {
			return first.toString();
		}
		first.health -= second.damagePerAttack;
		if (first.health <= 0) {
			return second.toString();
		}
	}
}

//Sum of angles
function angle(n) {
	return (n - 2) * 180;
}
