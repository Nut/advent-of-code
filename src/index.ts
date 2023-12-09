import { readFileSync } from "fs";
import { Day9 } from "./day9/day9";

// const file = readFileSync("./tests/day9/day9_input.txt", "utf-8");
const file = readFileSync("./tests/day9/day9_test_input.txt", "utf-8");
const input = file.split("\n");
const day9 = new Day9();

const result = day9.solvePartTwo(input);

console.log(result);
