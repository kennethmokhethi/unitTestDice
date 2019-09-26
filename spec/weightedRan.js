let list = [];

var rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeighedList = function(list, weight) {
  var weighed_list = [];

  // Loop over weights
  for (var i = 0; i < weight.length; i++) {
    var multiples = weight[i] * 100;

    // Loop over the list of items
    for (var j = 0; j < multiples; j++) {
      weighed_list.push(list[i]);
    }
  }

  return weighed_list;
};

for (let a = 1; a <= 6; a++) {
  list.push(a);
}

var weight = [0.5, 0.2, 0.2, 0.1];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length - 1);

console.log(weighed_list[random_num]);
