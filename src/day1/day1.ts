import { TOKEN_STRING_MAP } from "./tokenStringMap.const";

export interface Token {
  type: "Literal";
  value: number;
}

export class Day1 {
  public solve(words: string[]): number {
    let result = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      const tokens = this.tokeniser(word);
      const number1 = tokens[0].value;
      const number2 = tokens[tokens.length - 1].value;

      result += Number(`${number1}${number2}`);
    }

    return result;
  }

  private tokeniser(input: string): Token[] {
    let currentPosition = 0;
    const allTokens: Token[] = [];

    while (currentPosition < input.length) {
      for (const { key, value } of TOKEN_STRING_MAP) {
        if (!this.lookaheadString(key, input, currentPosition)) {
          continue;
        }

        allTokens.push(value);
      }

      currentPosition++;
    }

    return allTokens;
  }

  private lookaheadString(
    key: string,
    input: string,
    currentPosition: number
  ): boolean {
    const parts = key.split("");

    for (let i = 0; i < parts.length; i++) {
      if (input[currentPosition + i] !== parts[i]) {
        return false;
      }
    }

    return true;
  }
}
