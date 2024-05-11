const fs = require("node:fs");

function findFirstDigit(token) {
	for (const ch of token) {
		const val = Number.parseInt(ch);
		if (val) return val;
	}

	return -1;
}

function toCalibration(token) {
	const tokenChars = token.split("");

	const first = findFirstDigit(tokenChars);
	if (first === -1) return 0;

	const last = findFirstDigit(tokenChars.reverse());
	return first * 10 + last;
}

function solve() {
	fs.readFile("./input.txt", "utf-8", (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		const tokens = data.split("\n");
		console.log("Tokens: " + tokens.length);

		const result = tokens
			.map((token) => toCalibration(token))
			.reduce((acc, curr) => acc + curr, 0);

		console.log("Result: " + result);
	});
}

solve();
