import { readFileSync } from "fs";
import { Day1 } from "~/day1/day1";

describe("day1", () => {
  test.each([
    [["1abc2"], 12],
    [["pqr3stu8vwx"], 38],
    [["a1b2c3d4e5f"], 15],
    [["treb7uchet"], 77],
    [["98126"], 96],
    [["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"], 142],
    [["two1nine"], 29],
    [["eightwothree"], 83],
    [["abcone2threexyz"], 13],
    [["xtwone3four"], 24],
    [["4nineeightseven2"], 42],
    [["zoneight234"], 14],
    [["7pqrstsixteen"], 76],
    [
      [
        "two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen",
      ],
      281,
    ],
  ])("word(s) %s result(s) in %s", (word, expected) => {
    const day1 = new Day1();

    const result = day1.solve(word);

    expect(result).toBe(expected);
  });

  // INPUT FILE
  test("should solve test input for part one", () => {
    const file = readFileSync("./tests/day1/day1_input.txt", "utf-8");
    const input = file.split("\n");
    const day1 = new Day1();

    const result = day1.solve(input);

    console.log("RESULT: " + result);
  });
});
