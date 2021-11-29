function eqArrays(arr1, arr2){
    for (let i = 0; i < arr1.length ; i++) {
      if (arr1[i] === arr2[i] && (i < arr1.length - 1)) {
        continue;
      }
      else if (arr1[i] === arr2[i] && (i === arr1.length - 1)) {
        return true;
      }
      else {
        return false
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

  const without = function(array, toRemove) {
    // Create an array to store the non-matching elements
    let newArray = [];
    // Go through the elements of each array and compare them.
    for (let i = 0; i < array.length; i++) {
      if (!toRemove.includes(array[i])) {
        // If the elements don't match push them to the new array
        newArray.push(array[i]);
        //console.log(newArray);
      }
    };
    // console.log(newArray);
    return newArray;
  };

const word = [1, 2, 3];
 assertArraysEqual(without(word, [2]), [1, 3]);
 assertArraysEqual(word, [1, 2, 3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
