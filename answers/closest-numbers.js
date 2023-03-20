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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let minDiff = sortedArr[sortedArr.length - 1] - sortedArr[0];

  for (let i = 1; i < sortedArr.length; i++) {
    minDiff = Math.min(minDiff, sortedArr[i] - sortedArr[i - 1]);
  }

  let res = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] === minDiff) {
      res = [...res, ...[sortedArr[i], [sortedArr[i + 1]]]];
    }
  }
  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = closestNumbers(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
