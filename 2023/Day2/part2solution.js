const fs = require("node:fs");

function to_power(entry) {
    const sets = entry.split(";");

    let max_red = 1;
    let max_green = 1;
    let max_blue = 1;

    for (const set of sets) {
        const red = parseInt(set.match(/\d+ red/g)?.[0].split(" ")[0]);
        if (red != NaN && red > max_red) max_red = red;

        const green = parseInt(set.match(/\d+ green/g)?.[0].split(" ")[0]);
        if (green != NaN && green > max_green) max_green = green;

        const blue = parseInt(set.match(/\d+ blue/g)?.[0].split(" ")[0]);
        if (blue != NaN && blue > max_blue) max_blue = blue;
    }

    return max_red * max_green * max_blue;
}

function solve() {
    fs.readFile("input.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const entries = data.split("\n");
        entries.pop();

        const result = entries
            .map((entry) => to_power(entry))
            .reduce((acc, curr) => {
                return acc + curr;
            }, 0);
        console.log(result);
    });
}

solve();
