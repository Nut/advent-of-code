import { Day1 } from "~/day1";

describe("day1", () => {
  test("should solve", () => {
    const day1 = new Day1();
    const result = day1.solve("test1.txt");

    expect(result).toBe(12);
  });
});
