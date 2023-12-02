import { readFileSync } from "fs";
import { Day2 } from "~/day2/day2";

describe("Day2", () => {
  describe("part one", () => {
    test("should solve simple example", () => {
      const file = readFileSync("./tests/day2/day2_test_input.txt", "utf-8");
      const input = file.split("\n");
      const allowedConfig = { red: 12, green: 13, blue: 14 };
      const day2 = new Day2();

      const result = day2.solvePartOne(input, allowedConfig);

      expect(result).toBe(8);
    });

    test("should solve test example", () => {
      const file = readFileSync("./tests/day2/day2_input.txt", "utf-8");
      const input = file.split("\n");
      const allowedConfig = { red: 12, green: 13, blue: 14 };
      const day2 = new Day2();

      const result = day2.solvePartOne(input, allowedConfig);

      console.log("Result of Day 2 - part one: ", result);
      expect(result).toBe(2551);
    });
  });

  describe("part two", () => {
    test("should solve simple example", () => {
      const file = readFileSync("./tests/day2/day2_test_input.txt", "utf-8");
      const input = file.split("\n");
      const day2 = new Day2();

      const result = day2.solvePartTwo(input);

      expect(result).toBe(2286);
    });

    test("should solve test example", () => {
      const file = readFileSync("./tests/day2/day2_input.txt", "utf-8");
      const input = file.split("\n");
      const day2 = new Day2();

      const result = day2.solvePartTwo(input);

      console.log("Result of Day 2 - part two: ", result);
      expect(result).toBe(62811);
    });
  });
});
