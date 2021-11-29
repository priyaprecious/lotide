// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');//Test//
// const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');


//   assertArraysEqual(middle([1,2,3]),[2]);
//   assertArraysEqual(middle([1,2,3,4]), [2,3]);
//   assertArraysEqual(middle([]),[]);
//   assertArraysEqual(middle([1,2,3,4]),[2]); //false
//   assertArraysEqual(middle([1,2,3,4]),[2,3]);
//   assertArraysEqual(middle([1]),[]);
//   assertArraysEqual(middle([1,2]),[]);
//   assertArraysEqual(middle([1,2]),[1]); //false

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("returns [] for ['1','2']", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns  [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
});