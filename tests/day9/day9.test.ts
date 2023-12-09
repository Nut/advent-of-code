import { readFileSync } from "fs";
import { Day9 } from "~/day9/day9";

describe("Day 9", () => {
  test("part one", () => {
    const file = readFileSync("./tests/day9/day9_test_input.txt", "utf-8");
    const input = file.split("\n");
    const day9 = new Day9();

    const result = day9.solvePartOne(input);

    expect(result).toBe(114);
  });

  test("part two", () => {
    const file = readFileSync("./tests/day9/day9_test_input.txt", "utf-8");
    const input = file.split("\n");
    const day9 = new Day9();

    const result = day9.solvePartTwo(input);

    expect(result).toBe(2);
  });
});
