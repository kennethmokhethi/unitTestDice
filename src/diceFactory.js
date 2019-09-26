let Dice = require("./dice");

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

let dice = new Dice(6);
let factory20 = new DiceFactory(dice);
let die20 = factory20.makeDice();
let anotherDie20 = factory20.makeDice();

console.log(die20);
