import {assert} from 'chai';

function CountSeconds(time) {

  this.tick = function () {
    const count = time - 1;
    return count;
  };
}

const timer = new CountSeconds(30);

describe(`Function to count the number of seconds`, () => {

  it(`should return Object`, () => {
    assert.isObject(timer);
  });

  it(`Should reduce the time after new function call`, () => {
    assert.equal(29, timer.tick());
  });
});
