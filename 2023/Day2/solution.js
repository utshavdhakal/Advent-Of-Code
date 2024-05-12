const fs = require("node:fs");

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

function possibleOrNot(entry) {
	const gameId = parseInt(entry.match(/^Game \d+/g)[0].split(" ")[1]);
	// entry.replace(/^Game \d+: /g, "");

	const sets = entry.split(";");
	for (const set of sets) {
		// red, green or blue may not exist (?.)
		const red = set.match(/\d+ red/g)?.[0].split(" ")[0];
		const green = set.match(/\d+ green/g)?.[0].split(" ")[0];
		const blue = set.match(/\d+ blue/g)?.[0].split(" ")[0];

		if (red > 12) return -1;
		if (green > 13) return -1;
		if (blue > 14) return -1;
	}

	return gameId;
}

function solve() {
	fs.readFile("input.txt", "utf-8", (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		const entries = data.split("\n");
		entries.pop(); // remove extra blank entry due to splitting

		const result = entries
			.map((entry) => possibleOrNot(entry))
			.reduce((acc, curr) => {
				if (curr == -1) return acc;
				else return acc + curr;
			}, 0);

		console.log("Result: " + result);
	});
}

solve();
