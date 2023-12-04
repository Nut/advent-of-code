export class Day4 {
  public solvePartOne(input: string[]): number {
    let result = 0;

    input.forEach((card) => {
      const numberMatches = this.getNumberOfMatches(card);

      if (numberMatches > 0) {
        result += Math.pow(2, numberMatches - 1);
      }
    });

    return result;
  }

  public solvePartTwo(input: string[]): number {
    const matches = new Map();
    const numberOfCopies = new Map();

    input.forEach((card) => {
      const cardNumber = this.getCardNumber(card);
      const numberMatches = this.getNumberOfMatches(card);

      matches.set(cardNumber, numberMatches);
      numberOfCopies.set(cardNumber, 1);
    });

    return this.getTotalAmountOfCards(matches, numberOfCopies);
  }

  private getTotalAmountOfCards(
    matches: Map<number, number>,
    numberOfCopies: Map<number, number>
  ): number {
    for (let [cardNumber, amountCopies] of numberOfCopies) {
      for (let index = 0; index < amountCopies; index++) {
        const numberMatches = matches.get(cardNumber) || 0;
        for (let k = 0; k < numberMatches; k++) {
          const nextCardIndex = cardNumber + k + 1;
          numberOfCopies.set(
            nextCardIndex,
            (numberOfCopies.get(nextCardIndex) || 0) + 1
          );
        }
      }
    }

    return Array.from(numberOfCopies.values()).reduce((a, b) => a + b);
  }

  private getNumberOfMatches(card: string): number {
    let numberMatches = 0;
    const myNumbers = this.getMyNumbers(card);
    const winningNumbers = this.getWinningNumbers(card);

    winningNumbers.forEach((winningNumber) => {
      myNumbers.forEach((myNumber) => {
        if (winningNumber === myNumber) {
          numberMatches++;
        }
      });
    });

    return numberMatches;
  }

  private getMyNumbers(card: string): number[] {
    return card
      .split(/:|\|/)[2]
      .trim()
      .replaceAll("  ", " ")
      .split(" ")
      .map(Number);
  }

  private getWinningNumbers(card: string): number[] {
    return card
      .split(/:|\|/)[1]
      .trim()
      .replaceAll("  ", " ")
      .split(" ")
      .map(Number);
  }

  private getCardNumber(card: string) {
    return Number(card.split(/:/)[0].substring(5).trim());
  }
}
