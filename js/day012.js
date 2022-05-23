//Abbreviate a Two Word Name
function abbrevName(name) {
	return `${name[0].toUpperCase()}.${name[
		name.indexOf(' ') + 1
	].toUpperCase()}`;
}

//Beginner - Lost Without a Map
function maps(x) {
	return x.map(n => n * 2);
}
