//Head, Tail, Init and Last
const head = array => array[0];
const tail = array => array.slice(1);
const init = array => array.slice(0, -1);
const last = array => array[array.length - 1];

//Building Strings From a Hash
function solution(pairs) {
	let arr = [];
	for (const [k, v] of Object.entries(pairs)) {
		arr.push(`${k} = ${v}`);
	}
	return arr.join(',');
}
