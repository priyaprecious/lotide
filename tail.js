const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(inputValue) {
  let temp = [];
  if (inputValue.length <= 1 || inputValue === undefined || inputValue === null) {
    return [];
  } else {
    for (let i = 1; i < inputValue.length; i++) {
      temp.push(inputValue[i]);
    }
  }
  return temp;
};

const words = tail(["hello", "lighthouse", "labs"]);

assertEqual(words.length, 3);
assertEqual(words[0], "lighthouse");
assertEqual(words[1], "labs");