export class Day9 {
  public solvePartOne(input: string[]): number {
    let result = 0;

    for (let i = 0; i < input.length; i++) {
      const values = input[i].split(" ").map(Number);
      result += this.solve1(values);
    }

    return result;
  }

  private solve1(values: number[]): number {
    const currentHistory: number[] = [];

    for (let i = 0; i < values.length - 1; i++) {
      currentHistory.push(values[i + 1] - values[i]);
    }

    if (currentHistory.every((v) => v === 0)) {
      return values[values.length - 1];
    } else {
      return values[values.length - 1] + this.solve1(currentHistory);
    }
  }

  public solvePartTwo(input: string[]): number {
    let result = 0;

    for (let i = 0; i < input.length; i++) {
      const values = input[i].split(" ").map(Number);
      result += this.solve2(values);
    }

    return result;
  }

  private solve2(values: number[]): number {
    const currentHistory: number[] = [];

    for (let i = 0; i < values.length - 1; i++) {
      currentHistory.push(values[i + 1] - values[i]);
    }

    if (currentHistory.every((v) => v === 0)) {
      return values[0];
    } else {
      return values[0] - this.solve2(currentHistory);
    }
  }
}
