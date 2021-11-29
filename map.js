function eqArrays(arr1, arr2){
    for (let i = 0; i < arr1.length ; i++) {
      if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
        continue;
      }
      else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed : ${(actual)} === ${(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed : ${(actual)} !== ${(expected)}`);
    }
  };

const map = function(array, callback) {
const results = [];
for(let item of array) {
    results.push(callback(item));
}
return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.length * 2);
//console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, [12, 14, 4, 10, 6]);
