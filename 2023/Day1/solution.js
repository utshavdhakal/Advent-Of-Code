const fs = require("node:fs");

function findFirstNumber(token) {
    for (let i = 0; i < token.length; i++) {
        const ch = token.charAt(i);
        const num = Number.parseInt(ch);

        if (num) return num;
        else {
            const threeLetterWord = token.substring(i, i + 3);
            const fourLetterWord = token.substring(i, i + 4);
            const fiveLetterWord = token.substring(i, i + 5);

            if (threeLetterWord == "one") return 1;
            if (threeLetterWord == "two") return 2;
            if (threeLetterWord == "six") return 6;

            if (fourLetterWord == "four") return 4;
            if (fourLetterWord == "five") return 5;
            if (fourLetterWord == "nine") return 9;

            if (fiveLetterWord == "three") return 3;
            if (fiveLetterWord == "seven") return 7;
            if (fiveLetterWord == "eight") return 8;
        }
    }
    return -1;
}

function findLastNumber(token) {
    const reversedToken = token.split("").reverse().join("");

    for (let i = 0; i < reversedToken.length; i++) {
        const ch = reversedToken.charAt(i);
        const num = Number.parseInt(ch);

        if (num) return num;
        else {
            const threeLetterWord = reversedToken.substring(i, i + 3);
            const fourLetterWord = reversedToken.substring(i, i + 4);
            const fiveLetterWord = reversedToken.substring(i, i + 5);

            if (threeLetterWord == "eno") return 1;
            if (threeLetterWord == "owt") return 2;
            if (threeLetterWord == "xis") return 6;

            if (fourLetterWord == "ruof") return 4;
            if (fourLetterWord == "evif") return 5;
            if (fourLetterWord == "enin") return 9;

            if (fiveLetterWord == "eerht") return 3;
            if (fiveLetterWord == "neves") return 7;
            if (fiveLetterWord == "thgie") return 8;
        }
    }
    return -1;
}

console.log(findFirstNumber("abcone2threexyz"));
console.log(findLastNumber("abcone2threexyz"));

function toCalibration(token) {
    const first = findFirstNumber(token);
    const last = findLastNumber(token);
    if (first == -1) return 0;
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
