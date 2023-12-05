import { readFileSync } from "fs";
import {Day5} from "./day5/day5";

const file = readFileSync("./tests/day5/day5_test_input.txt", "utf-8");
const input = file.split("\n");
const day5 = new Day5();

const resultPartOne = day5.solvePartOne(input);

console.log(resultPartOne);
