import {assert} from 'chai';
import Timer from './../timer.js';

let secondsValue = 30;
let expectedSecondsValue = 29;
let answerTimer = new Timer(secondsValue);

describe(`Function to count the number of seconds`, () => {

  it(`should return Object`, () => {
    assert.isObject(answerTimer);
  });

  it(`should not work with negative value`, () => {
    secondsValue = -10;
    answerTimer = new Timer(secondsValue);

    assert.throws(() => answerTimer.tick());
  });


  it(`Should reduce the time after new function call`, () => {
    secondsValue = 30;
    expectedSecondsValue = 29;
    answerTimer = new Timer(secondsValue);

    assert.equal(expectedSecondsValue, answerTimer.tick());

    secondsValue = 26;
    expectedSecondsValue = 25;
    answerTimer = new Timer(secondsValue);

    assert.equal(expectedSecondsValue, answerTimer.tick());

    secondsValue = 18;
    expectedSecondsValue = 17;
    answerTimer = new Timer(secondsValue);

    assert.equal(expectedSecondsValue, answerTimer.tick());
  });

  it(`Should report when the value is 0`, () => {
    secondsValue = 0;
    answerTimer = new Timer(secondsValue);

    assert.throws(() => answerTimer.tick());
  });
});
