'use-strict';

/* Recursive form  of fibonacci Sequence 
 * @param n 
 * @return {number[]} || {function}
*/

export default function getNthFib(n) {
	if(n === 1) {
		return [0,1];
	} else {
		let s = getNthFib(n - 1)
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
}

console.log(getFib(8));
