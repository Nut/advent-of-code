import { readFileSync } from "fs";
import { Day1 } from "~/day1/day1";

describe("day1", () => {
  test.each([
    [["1abc2"], 12],
    [["pqr3stu8vwx"], 38],
    [["a1b2c3d4e5f"], 15],
    [["treb7uchet"], 77],
    [["98126"], 96],
  ])("word %s results in %s", (word, expected) => {
    const day1 = new Day1();

    const result = day1.solve(word);

    expect(result).toBe(expected);
  });

  test.each([[["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"], 142]])(
    "word %s results in %s",
    (word, expected) => {
      const day1 = new Day1();

      const result = day1.solve(word);

      expect(result).toBe(expected);
    }
  );

  // PART ONE
  test("should solve test input for part one", () => {
    const file = readFileSync("./tests/day1/part_1.txt", "utf-8");
    const input = file.split("\n");
    const day1 = new Day1();

    const result = day1.solve(input);

    console.log("RESULT: " + result);
  });
});
