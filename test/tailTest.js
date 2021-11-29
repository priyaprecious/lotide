// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = tail(["hello", "lighthouse", "labs"])
// assertEqual(words.length, 3)
// assertEqual(words[0], "lighthouse")
// assertEqual(words[1], "labs")

// const assert = require('chai').assert;
// const tail   = require('../head');

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5'); 
//   });
// });

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'LighthouseLabs' for ['Hello', 'Lighthouse', 'Labs']", () => {

    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.join(),[ "Lighthouse", "Labs"].join());
  });
});