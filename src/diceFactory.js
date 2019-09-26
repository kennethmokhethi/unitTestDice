let Dice = require("./Dice");

module.exports = class DiceFactory {
  // Cconstructor that accepts the dice as a parameter
  constructor(dice) {
    this.dice = dice;
  }

  // Creating a dice
  makeDice() {
    return this.dice;
  }
};
