function sumOfNumbers(numbers) {
	return numbers.reduce((previous, current) => previous + current, 0);
}
function convertTextToNumbers(text) {
	const alphabets = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5,
		f: 6,
		g: 7,
		h: 8,
		i: 9,
		j: 10,
		k: 11,
		l: 12,
		m: 13,
		n: 14,
		o: 15,
		p: 16,
		q: 17,
		r: 18,
		s: 19,
		t: 20,
		u: 21,
		v: 22,
		w: 23,
		x: 24,
		y: 25,
		z: 26,
	};
	const charachters = [...text];

	const numbers = charachters
		.map((charachter) => alphabets[charachter.toLowerCase()])
		.filter((number) => number !== undefined);

	return sumOfNumbers(numbers);
}

const testCases = [' ', 'B', 'C', 'Ibrahim , , ,', 'Test', 'test', 'BY'];

const converted = testCases.map((testCase) => ({
	text: testCase,
	total: convertTextToNumbers(testCase),
}));

console.log(converted);

module.exports = convertTextToNumbers;
