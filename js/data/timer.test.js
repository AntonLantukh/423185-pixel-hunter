import {assert} from 'chai';
import CountSeconds from './../timer.js';

let secondsValue = 30;
let expectedSecondsValue = 29;
let timer = new CountSeconds(secondsValue);

describe(`Function to count the number of seconds`, () => {

  it(`should return Object`, () => {
    assert.isObject(timer);
  });

  it(`should not work with negative value`, () => {
    secondsValue = -10;
    timer = new CountSeconds(secondsValue);

    assert.throws(() => timer.tick());
  });


  it(`Should reduce the time after new function call`, () => {
    secondsValue = 30;
    expectedSecondsValue = 29;
    timer = new CountSeconds(secondsValue);

    assert.equal(expectedSecondsValue, timer.tick());

    secondsValue = 26;
    expectedSecondsValue = 25;
    timer = new CountSeconds(secondsValue);

    assert.equal(expectedSecondsValue, timer.tick());

    secondsValue = 18;
    expectedSecondsValue = 17;
    timer = new CountSeconds(secondsValue);

    assert.equal(expectedSecondsValue, timer.tick());
  });

  it(`Should report when the value is 0`, () => {
    secondsValue = 0;
    timer = new CountSeconds(secondsValue);

    assert.throws(() => timer.tick());
  });
});
