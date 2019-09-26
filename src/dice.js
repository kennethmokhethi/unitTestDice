class Dice {
  // Constructor for the dice class
  constructor(sides) {
    this.sides = sides;
    this.value;

    if (arguments.length == 2) {
      this.probability = arguments[1];
      this.error_Handling();
    }
  }

  roll() {
    this.value = Math.round(Math.random() * (this.sides - 1) + 1);
  }

  setProbabilities(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) === false)
        throw new Error("only integer values allowed").message;
    }
    this.probability = arr;
    this.error_Handling();
  }
}
