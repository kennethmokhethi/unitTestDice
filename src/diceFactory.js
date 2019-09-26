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
// dice2.
// let arr2 = dice2.setProbabilities([1, 1, 2, 3, 1, 1]);
// console.log(dice2);
console.log(dice3);

// let dice = new Dice(6);
// let factory20 = new DiceFactory(dice);
// let die20 = factory20.makeDice();
// let anotherDie20 = factory20.makeDice();

// console.log(die20);
