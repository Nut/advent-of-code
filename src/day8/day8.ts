export class Day8 {
  public solvePartOne(input: string[]): number {
    const instructions = this.getInstructions(input);
    const nodeMap = this.getNodeMap(input);

    let steps = 0;
    let currentKey = "AAA";

    while (currentKey !== "ZZZ") {
      const instruction = instructions[steps % instructions.length];
      const currentNodes = nodeMap.get(currentKey);

      if (instruction === "L" && currentNodes) currentKey = currentNodes[0];
      if (instruction === "R" && currentNodes) currentKey = currentNodes[1];

      steps++;
    }

    return steps;
  }

  public solvePartTwo(input: string[]): number {
    const instructions = this.getInstructions(input);
    const nodeMap = this.getNodeMap(input);
    let allCurrentNodes = Array.from(nodeMap.keys()).filter((key) =>
      key.endsWith("A")
    );

    const result = allCurrentNodes.map((node) => {
      let steps = 0;
      let currentKey = node;

      while (!currentKey.endsWith("Z")) {
        const instruction = instructions[steps % instructions.length];
        const currentNodes = nodeMap.get(currentKey);

        if (instruction === "L" && currentNodes) currentKey = currentNodes[0];
        if (instruction === "R" && currentNodes) currentKey = currentNodes[1];

        steps++;
      }

      return steps;
    });

    return this.lcm(...result);
  }

  private getInstructions(input: string[]): string[] {
    return input[0].split("");
  }

  private getNodeMap(input: string[]): Map<string, [string, string]> {
    const nodeMap = new Map<string, [string, string]>();

    for (let i = 2; i < input.length; i++) {
      const element = input[i];
      const key = element.slice(0, 3);
      const leftNode = element.match(/\((\w+)/);
      const rightNode = element.match(/(\w+)\)/);

      if (leftNode?.[1] && rightNode?.[1]) {
        nodeMap.set(key, [leftNode[1], rightNode[1]]);
      }
    }

    return nodeMap;
  }

  private lcm(...arr: number[]) {
    const gcd: (x: number, y: number) => number = (x, y) =>
      !y ? x : gcd(y, x % y);
    const _lcm: (x: number, y: number) => number = (x, y) =>
      (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
  }
}
