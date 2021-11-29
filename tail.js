// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log("✅" + `Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log("🔴" + `Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual')
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

// 

module.exports = tail;