// let Dice = require("./dice"); Commented becuase it make the program not work when testing using jasmine

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
