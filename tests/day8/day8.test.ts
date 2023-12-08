import { readFileSync } from "fs";
import { Day8 } from "~/day8/day8";

describe("Day8", () => {
  test("part one", () => {
    const file = readFileSync("./tests/day8/day8_test_input.txt", "utf-8");
    const input = file.split("\n");
    const day8 = new Day8();

    const result = day8.solvePartOne(input);

    expect(result).toBe(6);
  });

  test("part two", () => {
    const file = readFileSync(
      "./tests/day8/day8_test_input_part2.txt",
      "utf-8"
    );
    const input = file.split("\n");
    const day8 = new Day8();

    const result = day8.solvePartTwo(input);

    expect(result).toBe(6);
  });
});
