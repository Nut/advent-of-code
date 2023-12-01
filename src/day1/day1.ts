export class Day1 {
  public solve(words: string[]): number {
    let result = 0;

    for (let i = 0; i < words.length; i++) {
      let number1 = "0";
      let number2 = "0";
      const word = words[i];

      for (let j = 0; j < word.length; j++) {
        if (this.isNumber(word[j])) {
          number1 = word[j];
          break;
        }
      }

      for (let j = word.length - 1; j >= 0; j--) {
        if (this.isNumber(word[j])) {
          number2 = word[j];
          break;
        }
      }

      result += Number(`${number1}${number2}`);
    }

    return result;
  }

  private isNumber(value?: string | number): boolean {
    return value != null && value !== "" && !isNaN(Number(value.toString()));
  }
}
