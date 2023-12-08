import { readFileSync } from "fs";
import { Day8 } from "./day8/day8";

// const file = readFileSync("./tests/day8/day8_test_input_part2.txt", "utf-8");
const file = readFileSync("./tests/day8/day8_input.txt", "utf-8");
const input = file.split("\n");
const day8 = new Day8();

const result = day8.solvePartTwo(input);

console.log(result);
