//Difference of Volumes of Cuboids
function findDifference(a, b) {
	return Math.abs(a.reduce((t, x) => t * x, 1) - b.reduce((t, x) => t * x, 1));
}

//Welcome!
function greet(language) {
	const obj = {
		english: 'Welcome',
		czech: 'Vitejte',
		danish: 'Velkomst',
		dutch: 'Welkom',
		estonian: 'Tere tulemast',
		finnish: 'Tervetuloa',
		flemish: 'Welgekomen',
		french: 'Bienvenue',
		german: 'Willkommen',
		irish: 'Failte',
		italian: 'Benvenuto',
		latvian: 'Gaidits',
		lithuanian: 'Laukiamas',
		polish: 'Witamy',
		spanish: 'Bienvenido',
		swedish: 'Valkommen',
		welsh: 'Croeso',
	};
	if (obj.hasOwnProperty(language)) {
		return obj[language];
	} else {
		return obj.english;
	}
}
