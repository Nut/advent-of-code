import { readFileSync } from "fs";
import { Day2 } from "~/day2/day2";

describe("Day2", () => {
  test("should solve simple example", () => {
    const file = readFileSync("./tests/day2/day2_test_input.txt", "utf-8");
    const input = file.split("\n");
    const allowedConfig = { red: 12, green: 13, blue: 14 };
    const day2 = new Day2(allowedConfig);

    const result = day2.solve(input);

    expect(result).toBe(8);
  });

  test("should solve test example", () => {
    const file = readFileSync("./tests/day2/day2_input.txt", "utf-8");
    const input = file.split("\n");
    const allowedConfig = { red: 12, green: 13, blue: 14 };
    const day2 = new Day2(allowedConfig);

    const result = day2.solve(input);

    console.log("Result of Day 2 - part one: ", result);
  });
});
