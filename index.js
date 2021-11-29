// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const without = require('./without');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findkeyByValue = require('./findkeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');


module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  without,
  countOnly,
  countLetters,
  findKey,
  findkeyByValue,
  letterPositions,
  takeUntil
};