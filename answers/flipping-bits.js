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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
  // Write your code here
  const nBit = Number(n).toString(2).padStart(32);
  let res = 0;

  for (let i = 31; i >= 0; i--) {
    const flippedBit = nBit[i] === "1" ? 0 : 1;
    res += flippedBit === 1 ? Math.pow(2, 31 - i) : 0;
  }
  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = flippingBits(n);

    ws.write(result + "\n");
  }

  ws.end();
}