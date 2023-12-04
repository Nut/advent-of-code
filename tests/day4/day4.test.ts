import { readFileSync } from "fs";
import { Day4 } from "~/day4/day4";

describe("Day4", () => {
  test("part one", () => {
    const file = readFileSync("./tests/day4/day4_test_input.txt", "utf-8");
    const input = file.split("\n");
    const day4 = new Day4();

    const resultPartOne = day4.solvePartOne(input);

    expect(resultPartOne).toBe(13);
  });

  test("part two", () => {
    const file = readFileSync("./tests/day4/day4_test_input.txt", "utf-8");
    const input = file.split("\n");
    const day4 = new Day4();

    const resultPartTwo = day4.solvePartTwo(input);

    expect(resultPartTwo).toBe(30);
  });
});
