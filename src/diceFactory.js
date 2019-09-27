let Dice = require("./dice");

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

let dice2 = new DiceFactory(3);

dice2.makeDice().setProbabilities([2, 6, 7]);
let dice3 = dice2.makeDice();

console.log(dice3);
