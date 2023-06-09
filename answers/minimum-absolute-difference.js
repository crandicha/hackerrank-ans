"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let minDiff = null;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = Math.abs(sortedArr[i] - sortedArr[i + 1]);
    if (minDiff === null) {
      minDiff = diff;
    } else {
      minDiff = Math.min(minDiff, diff);
    }
  }
  return minDiff;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
