// let Dice = require("./dice");

class DiceFactory {
  // Cconstructor that accepts the dice as a parameter
  constructor(dice) {
    this.dice = new Dice(dice);
    if (arguments.length == 2) {
      this.dice = new Dice(dice, arguments[1]);
    }
  }

  // Creating a dice
  makeDice() {
    return this.dice;
  }
}
