// let Dice = require("../src/dice");
// let DiceFactory = require("../src/diceFactory");

describe("Checking the sides range", () => {
  it("Should print a number between 1 and 6", () => {
    let dice = new Dice(6);
    let isWithinRange = false;
    let value = dice.roll();
    if (value > 0 && value <= 6) {
      isWithinRange = true;
    }
    expect(isWithinRange).toBe(true);
  });
});

describe("Error handling", () => {
  it("Check negative propability", () => {
    let dieDodgy6 = new Dice(6);
    try {
      dieDodgy6.setProbabilities([1, 1, 1, 1, -1, 2]);
    } catch (e) {
      expect(e).toBeTruthy("negative probabilities not allowed");
    }
  });
});
