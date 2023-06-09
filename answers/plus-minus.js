"use strict";

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const len = arr.length;
  let pos = 0;
  let zero = 0;
  let neg = 0;

  for (let i = 0; i < len; i++) {
    const val = arr[i];
    if (val < 0) neg++;
    if (val === 0) zero++;
    if (val > 0) pos++;
  }
  console.log((pos / len).toFixed(6));
  console.log((neg / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
