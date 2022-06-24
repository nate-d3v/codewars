//Will there be enough space?
function enough(cap, on, wait) {
	return wait - (cap - on) > 0 ? wait - (cap - on) : 0;
}

//Short Long Short
function solution(a, b) {
	return a.length > b.length ? b + a + b : a + b + a;
}
