interface AllowedConfig {
  blue: number;
  green: number;
  red: number;
}

type Sets = AllowedConfig[];

export class Day2 {
  public solvePartOne(games: string[], allowedConfig: AllowedConfig): number {
    let result = 0;

    for (const game of games) {
      const gameId = this.getGameId(game);
      const gameSets = this.getSets(game);

      if (this.isGameValid(gameSets, allowedConfig)) {
        result += gameId;
      }
    }

    return result;
  }

  public solvePartTwo(games: string[]): number {
    let result = 0;

    for (const game of games) {
      const gameSets = this.getSets(game);
      result += this.getMinPowerOfSetOfCubes(gameSets);
    }

    return result;
  }

  private isGameValid(gameSets: Sets, allowedConfig: AllowedConfig): boolean {
    for (const gameSet of gameSets) {
      for (const [key, value] of Object.entries(gameSet)) {
        if (value > allowedConfig[key as keyof AllowedConfig]) {
          return false;
        }
      }
    }
    return true;
  }

  private getSets(game: string) {
    const result: Sets = [];
    const sets = game.replace(/Game \d+: /g, "").split("; ");
    for (const set of sets) {
      result.push({
        blue: Number(set.match(/\d+ blue/)?.[0].split(" ")[0]) || 0,
        green: Number(set.match(/\d+ green/)?.[0].split(" ")[0]) || 0,
        red: Number(set.match(/\d+ red/)?.[0].split(" ")[0]) || 0,
      });
    }

    return result;
  }

  private getGameId(game: string): number {
    const matches = game.match(/Game \d+/g);
    return Number(matches?.[0].split(" ")[1]) || 0;
  }

  private getMinPowerOfSetOfCubes(gameSets: Sets) {
    let maxBlue = 1;
    let maxGreen = 1;
    let maxRed = 1;

    for (const { blue, green, red } of gameSets) {
      maxBlue = blue > maxBlue ? blue : maxBlue;
      maxGreen = green > maxGreen ? green : maxGreen;
      maxRed = red > maxRed ? red : maxRed;
    }

    return maxBlue * maxGreen * maxRed;
  }
}
