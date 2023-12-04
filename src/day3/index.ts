import { readFileSync } from "fs";
import { Day3 } from "./day3";

const file = readFileSync("./tests/day3/day3_input.txt", "utf-8");
const input = file.split("\n");

const day3 = new Day3();
day3.solvePartOne();

const result: string[] = [];

for (let lineIndex = 0; lineIndex < input.length; lineIndex++) {
  const line = input[lineIndex];
  let flag = false;
  let currentValue = "";
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (isNumber(char)) {
      currentValue += char;
      const isPartOfEngine = isNumberPartOfEngine(input, i, lineIndex);
      if (isPartOfEngine) {
        flag = true;
      }

      if (currentValue !== "" && i === line.length - 1 && flag) {
        result.push(currentValue);
      }
    } else {
      if (flag) {
        result.push(currentValue);
        flag = false;
      }
      currentValue = "";
      // no number, continue
    }
  }
}

const sum = result
  .filter((v) => v)
  .map((value) => Number(value))
  .reduce((a, b) => a + b);

console.log(sum);

function isNumberPartOfEngine(
  engine: string[],
  startIndex: number,
  lineNumber: number
) {
  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      const foo = lineNumber + k;
      const bar = startIndex + l;
      if (
        foo >= 0 &&
        foo < engine.length &&
        bar >= 0 &&
        bar < engine[foo].length
      ) {
        if (isEnginePart(engine[foo][bar])) {
          return true;
        }
      }
    }
  }

  return false;
}

function isEnginePart(value: string): boolean {
  return value !== "." && !isNumber(value);
}

function isNumber(value: string): boolean {
  return !isNaN(+value);
}
