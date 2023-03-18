"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

const splitText = (str: string): string => {
  let splittedText = str;
  splittedText = splittedText.replace("()", "");
  splittedText = splittedText.replace(/([a-z])([A-Z])/g, "$1 $2");
  splittedText = splittedText.toLowerCase();
  return splittedText;
};

const combineText = (str: string): string => {
  return str
    .split(" ")
    .map((s) => capitalize(s))
    .join("");
};

const capitalize = (str: string): string => {
  return str[0].toUpperCase() + str.substr(1, str.length - 1);
};

const decapitalize = (str: string): string => {
  return str[0].toLowerCase() + str.substr(1, str.length - 1);
};

const methodText = (str: string): string => {
  return decapitalize(combineText(str)) + "()";
};

const classText = (str: string): string => {
  return combineText(str);
};

const variableText = (str: string): string => {
  return decapitalize(combineText(str));
};

function main() {
  // Enter your code here
  const outputs: string[] = [];

  inputLines.forEach((line) => {
    const [operation, indicator, str] = line.split(";");

    if (operation === "S") {
      outputs.push(splitText(str));
    } else {
      let parsedText = "";
      switch (indicator) {
        case "M":
          parsedText = methodText(str);
          break;
        case "C":
          parsedText = classText(str);
          break;
        case "V":
          parsedText = variableText(str);
          break;
        default:
          break;
      }
      outputs.push(parsedText);
    }
  });

  outputs.forEach((output) => console.log(output));
}
